import React from 'react';
import SingleEvent from './single-event';


class AllEvents extends React.Component {
constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        { this.props.yelplist.map((event, index) => { return (<SingleEvent title={event.name} key={index} />);})}
      </div>
      );
  }
}

export default AllEvents;
