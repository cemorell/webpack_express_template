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
    this.props.music(this.refs.playlist.value);

  }


  render(){
    return (
    <div id="searchContainer">
      <form onSubmit={ this._handleSearch.bind(this) } id="searchForm" >
        <input type="search" placeholder="What theme?" ref="themeSearch"  />
        <input type="search" placeholder="What City?" ref="city"  />
        <input type="search" placeholder="What playlist?" ref="playlist"  />
        <input type="submit" value="Search on!" />
      </form>
    </div>
    )
  }
}

export default Search;
