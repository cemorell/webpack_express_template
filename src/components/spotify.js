import React from 'react';
import SpotifyPlayer from 'react-spotify-player';



class Spotify extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div id="spotify-player" className="col-xs-12 col-md-4">

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


