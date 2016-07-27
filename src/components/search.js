import React from 'react';
import Spotify from './spotify';
import Weather from './weather';
import AllEvents from './all-events';


class Search extends React.Component {
 constructor(props){
    super(props);
  }

  _handleSearch(event){
    event.preventDefault();

    this.props.search(this.refs.city.value);
    this.props.searchYelp(this.refs.themeSearch.value, this.refs.city.value);

  }


  render(){
    return (
    <div>
      <form onSubmit={ this._handleSearch.bind(this) }>
        <input type="search" placeholder="What theme?" ref="themeSearch"  />
        <input type="search" placeholder="What City?" ref="city"  />
        <input type="submit" value="Search on!" />
      </form>
    </div>
    )
  }
}

export default Search;
