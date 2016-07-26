import React from 'react';
import Weather from './weather';


class WeatherList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        { this.props.weatherlist.map((weather, index) => { return (<Weather day={weather.title} text={weather.fcttext} image={weather.icon_url} key={index} />);})}
      </div>
      );
  }
}

export default WeatherList;