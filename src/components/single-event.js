import React from 'react';
import MyDate from './my-date';

var savedDates =[];

class SingleEvent extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      savedDates: []
    }
  }
  _saveDate(){
    var newSavedDate = {
      image: this.props.image,
      title: this.props.title,
      info: this.props.info
    }
    this.firebaseRef.push(newSavedDate);
  }
  componentWillMount(){
    this.firebaseRef = new Firebase('https://build-a-date.firebaseio.com/build-a-date');

    this.firebaseRef.once("value", function(snapshot){
      var savedDates=[];
      snapshot.forEach(function(data){
        var savedDate = {
          image: data.val().image,
          info: data.val().info,
          title: data.val().title
        }
        savedDates.push(savedDate);
        this.setState({savedDates: savedDates});
      });
    });
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
