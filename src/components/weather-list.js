import React from 'react';
import Weather from './weather';


class WeatherList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-xs-12 col-md-3 pic-container" >
        <nav>
          <h3>Weather</h3>
          <ul>
            { this.props.weatherlist.map((weather, index) => { return (<Weather day={weather.title} text={weather.fcttext} image={weather.icon_url} key={index} />);})}
          </ul>
        </nav>
      </div>
      );
  }
}

export default WeatherList;
