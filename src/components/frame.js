
class Frame extends React.Component {

  render: function() {
    return <iframe />;
  },
  componentDidMount: function() {
    this.renderFrameContent();
  },
  renderFrameContents: function() {
    var doc = this.getDOMNode().contentDocument
    if(doc.readyState === 'complete') {
       React.renderComponent(this.props.children, doc.body);
    } else {
       setTimeout(this.renderFrameContents, 0);
    }
  },
  componentDidUpdate: function() {
    this.renderFrameContents();
  },
  componentWillUnmount: function() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
};



var ReactBrowserComponentMixin = require('ReactBrowserComponentMixin');
var ReactCompositeComponent = require('ReactCompositeComponent');
var ReactDOM = require('ReactDOM');
var ReactEventEmitter = require('ReactEventEmitter');
var EventConstants = require('EventConstants');

var iframe = ReactDOM.iframe;

var ReactDOMIframe = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMIframe',
  tagName: 'IFRAME',

  mixins: [ReactBrowserComponentMixin],

  render: function() {
    return iframe(this.props);
  },

  componentWillMount: function() {
    var node = this.getDOMNode();
    ReactEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topLoad,
      'load',
      node
    );
  }
});

module.exports = ReactDOMIframe;
