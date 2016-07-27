import React from 'react';
import 'whatwg-fetch';
import Search from './search';
import WeatherList from './weather-list';
import AllEvents from './all-events';
import Spotify from './spotify';
import MyDate from './my-date';


class DateContainer extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      weatherlist: [],
      events: [],
      music: {}
    };
  }

_handleYelp(theme, city) {

    fetch(`/yelp?theme=${theme}&city=${city}`, {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let these = results.businesses
        this.setState({
          events: these
        })      })
      // .catch((ex) => {
      //   console.log('parsing failed', ex)
      // })
  }

  _fetchMusic(searchTerm) {

    fetch(`//api.spotify.com/v1/search?query=%22${searchTerm}%22&offset=0&limit=20&type=playlist`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let playlist = results.playlists.items[0]
        console.log(playlist)
        this.setState({
          music: playlist
        })
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }



  _fetchWeather(searchTerm) {

    fetch(`//api.wunderground.com/api/64bf88b7ae5575b4/forecast10day/q/TX/${searchTerm}.json`)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        let week = results.forecast.txt_forecast.forecastday
        this.setState({
          weatherlist: week
        })
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }



  render(){
    return (
    <div>
      <Search searchYelp={this._handleYelp.bind(this)} music={this._fetchMusic.bind(this)} search={this._fetchWeather.bind(this)}/>
      <Spotify musicinfo={this.state.music}/>
      <AllEvents yelplist={this.state.events}/>
      <WeatherList weatherlist={this.state.weatherlist}/>
      <MyDate />
    </div>
    )
  }
}

export default DateContainer;





