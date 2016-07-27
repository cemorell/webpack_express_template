import React from 'react';

class SingleEvent extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
        <h4>{this.props.title}</h4>
    </div>
    )
  }
}

export default SingleEvent;
