import React from 'react';
import SpotifyPlayer from 'react-spotify-player';



class Spotify extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="col-xs-12 col-md-5">

    <SpotifyPlayer
      uri= {this.props.own}
      size="large"
      view="list"
      theme="black" />
     </div>
    )
  }
}

export default Spotify;


