import React from 'react';
import SingleEvent from './single-event';


class MyDate extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="col-xs-12 col-md-5">
        <img src={this.props.datebuild.image}/>
        <p>{this.props.datebuild.info}</p>
        <p>{this.props.datebuild.title}</p>
      </div>
      );
  }
}

export default MyDate;
