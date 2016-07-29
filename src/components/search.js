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


    this.props.searchYelp(this.refs.themeSearch.value);
    this.props.music(this.refs.playlist.value);
    this.props.search("Austin")


  }

  _doSearch( activity) {
    this.props.imageSearch(activity)
    this.props.search("Austin")
  }


// <input type="search" placeholder="What City?" ref="city"  />
  render(){
    return (
    <div id="searchContainer">
      <form onSubmit={ this._handleSearch.bind(this) } id="searchForm" >
        <input type="search" placeholder="What theme?" ref="themeSearch"  />
        <input type="search" placeholder="What playlist?" ref="playlist"  />
        <input type="submit" value="Search on!" />
      </form>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Need Suggestions?
      </button>
      <div className="collapse" id="collapseExample">
        <button  onClick={ this._doSearch.bind(this, 'romantic dinner') }  href="#"><img className="image-button" src="./images/romantic-dinner.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'performing arts') } href="#"><img className="image-button" src="./images/performing-arts.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'farmers market') } href="#"><img className="image-button" src="./images/farmers.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'brewery') } href="#"><img className="image-button" src="./images/beer.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'hiking') } href="#"><img className="image-button" src="./images/outdoors.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'dancing') } href="#"><img className="image-button" src="./images/dancing.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'movies') } href="#"><img className="image-button" src="./images/movies.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'relaxing') } href="#"><img className="image-button" src="./images/relaxing.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'dive bar') } href="#"><img className="image-button" src="./images/dive-bar.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'staycation') } href="#"><img className="image-button" src="./images/staycation.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'brunch') } href="#"><img className="image-button" src="./images/brunch.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'arts') } href="#"><img className="image-button" src="./images/art-class.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'blind date') } href="#"><img className="image-button" src="./images/blind-date.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'adventure') } href="#"><img className="image-button" src="./images/adventure.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'winery') } href="#"><img className="image-button" src="./images/winery.jpg" /></button>
        <button  onClick={ this._doSearch.bind(this, 'comedy') } href="#"><img className="image-button" src="./images/comedy.jpg" /></button>
      </div>
    </div>
    )
  }
}

export default Search;
