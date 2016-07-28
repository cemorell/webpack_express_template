import React from 'react';
import MyDate from './my-date';


class SelectedEvents extends React.Component {
constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-xs-12 col-md-5">
        { this.props.events.map((event, index) => { return (<MyDate title={event.title} info={event.info} image={event.image} key={index} />);})}
      </div>
      );
  }
}

export default SelectedEvents;
