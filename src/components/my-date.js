import React from 'react';
import SingleEvent from './single-event';


class MyDate extends React.Component {
  constructor(props){
    super(props);
  }

  _handleDelete(e){
    e.preventDefault();
    console.log(this.props.id)
    var itemRef = new Firebase(`https://build-a-date.firebaseio.com/build-a-date/${this.props.id}`);
    itemRef.remove();



  }

  render(){
    return (
      <div className="col-xs-12 col-md-5">
        <img src={this.props.image} />
        <h4>{this.props.title}</h4>
        <p>{this.props.info}</p>
        <i onClick={this._handleDelete.bind(this)} className="fa fa-trash" aria-hidden="true"></i>

      </div>
      );
  }
}

export default MyDate;
