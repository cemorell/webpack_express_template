import React from 'react';
import 'whatwg-fetch';
import Search from './search';


class DateContainer extends React.Component {
 constructor(props){
    super(props);
  }

  _handleYelp(theme, city) {

    fetch(`/yelp?theme=${theme}&city=${city}`, {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log(results);
      })
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  render(){
    return (
    <div>
      <Search  search={this._handleYelp.bind(this)}  />
    </div>
    )
  }


}

export default DateContainer;





