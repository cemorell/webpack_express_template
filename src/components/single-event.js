import React from 'react';
import MyDate from './my-date';

var savedDates =[];

class SingleEvent extends React.Component {
 constructor(props){
    super(props);
  }

  _saveDate(){
    var newSavedDate = {
      image: this.props.image,
      title: this.props.title,
      info: this.props.info
    }
    this.props.firebaseRef.push(newSavedDate);
  }


  render(){
    return (
    <div className="oneevent">
      <img src={this.props.image} />
      <h4>{this.props.title}</h4>
      <p>{this.props.info}</p>
      <button onClick={this._saveDate.bind(this)}>Add to my date</button>
    </div>
    )
  }
}

export default SingleEvent;
