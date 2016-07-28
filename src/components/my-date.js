import React from 'react';
import SingleEvent from './single-event';


class MyDate extends React.Component {
  constructor(props){
    super(props);
  }
  _handleDelete(itemId){
    var itemRef = new Firebase('https://build-a-date.firebaseio.com/build-a-date');
    itemRef.child(itemId).remove();
  }
  render(){
    return (
      <div className="col-xs-12 col-md-5">
        <img src={this.props.image} />
        <h4>{this.props.title}</h4>
        <p>{this.props.info}</p>
        <button onClick={this._handleDelete.bind(this)}>Remove from My Date</button>
      </div>
      );
  }
}

export default MyDate;
