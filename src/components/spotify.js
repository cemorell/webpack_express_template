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
      uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
      size="large"
      view="list"
      theme="list" />


    <img src={this.props.image.url} />
    <a href={this.props.link.spotify} target="_blank">{this.props.musicinfo.name}</a>
    </div>
    )
  }
}

export default Spotify;


