import React from 'react';

class Spotify extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="col-xs-12 col-md-10">
        <h1>{this.props.musicinfo.name}</h1>
    </div>
    )
  }
}

export default Spotify;


