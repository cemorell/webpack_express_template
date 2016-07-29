import React from 'react';
import SingleEvent from './single-event';


class AllEvents extends React.Component {
constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-xs-12 col-md-5 results-container" id="all-events">
        <h3>Ideas for your date!</h3>
        <nav id="events">
          <ul>
            { this.props.yelplist.map((event, index) => { return (<SingleEvent firebaseRef={this.props.firebaseRef} title={event.name} info={event.snippet_text} image={event.image_url} key={index} />);})}
          </ul>
        </nav>
      </div>
      );
  }
}

export default AllEvents;
