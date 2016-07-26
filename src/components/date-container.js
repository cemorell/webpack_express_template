import React from 'react';
import 'whatwg-fetch';
import Search from './search';
import WeatherList from './weather-list';
import AllEvents from './all-events';


class DateContainer extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      weatherlist: [],
      events: []

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
        console.log(these)
        this.setState({
          events: these
        })      })
      // .catch((ex) => {
      //   console.log('parsing failed', ex)
      // })
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
      <Search searchYelp={this._handleYelp.bind(this)} search={this._fetchWeather.bind(this)}/>
      <WeatherList weatherlist={this.state.weatherlist}/>
      <AllEvents yelplist={this.state.events}/>
    </div>
    )
  }
}

export default DateContainer;





