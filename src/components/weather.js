import React from 'react';

class Weather extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
        <img src={this.props.image} />
        <h4>{this.props.day}</h4>
        <p> {this.props.text}</p>
    </div>
    )
  }
}

export default Weather;
