import React from 'react';
import SingleEvent from './single-event';


class MyDate extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-xs-12 col-md-5">
        I'm a saved date.
      </div>
      );
  }
}

export default MyDate;
