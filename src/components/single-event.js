import React from 'react';

class SingleEvent extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="oneevent">
        <img src={this.props.image} />
        <h4>{this.props.title}</h4>
        <p>{this.props.info}</p>
    </div>
    )
  }
}

export default SingleEvent;
