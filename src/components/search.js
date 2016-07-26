import React from 'react';
import Spotify from './spotify';
import Weather from './weather';
import AllEvents from './all-events';



class Search extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
      <form onSubmit={ this._handleSearch.bind(this) }>
        <input type="search" placeholder="01/01/2016" ref="DaySearch"  />
        <input type="search" placeholder="What theme?" ref="ThemeSearch"  />
        <input type="search" placeholder="What timeISH?" ref="TimeoDay"  />
        <input type="submit" value="Search on!" />
      </form>
    </div>
    )
  }
}

export default Search;
