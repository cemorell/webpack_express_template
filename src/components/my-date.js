import React from 'react';
import SingleEvent from './single-event';


class MyDate extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="col-xs-12 col-md-5">
        <img src={this.props.image} />
        <h4>{this.props.title}</h4>
        <p>{this.props.info}</p>
      </div>
      );
  }
}

export default MyDate;
