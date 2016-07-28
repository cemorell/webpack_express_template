import React from 'react';
import SingleEvent from './single-event';


class AllEvents extends React.Component {
constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-xs-12 col-md-5">
        { this.props.yelplist.map((event, index) => { return (<SingleEvent firebaseRef={this.props.firebaseRef} title={event.name} info={event.snippet_text} image={event.image_url} key={index} />);})}
      </div>
      );
  }
}

export default AllEvents;
