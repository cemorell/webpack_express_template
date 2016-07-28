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
    this.props.searchYelp(activity)
    this.props.search("Austin")
  }


// <input type="search" placeholder="What City?" ref="city"  />
  render(){
    return (
    <div>
      <form onSubmit={ this._handleSearch.bind(this) }>
        <input type="search" placeholder="What theme?" ref="themeSearch"  />
        <input type="search" placeholder="What playlist?" ref="playlist"  />
        <input type="submit" value="Search on!" />
      </form>
        <button onClick={ this._doSearch.bind(this, 'romantic dinner') }  href="#" ref="hiking"><img className="image-button" src="./images/romantic-dinner.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'performing arts') } href="#" ref="hiking"><img className="image-button" src="./images/performing-arts.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'farmers market') } href="#" ref="hiking"><img className="image-button" src="./images/farmers.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'brewery') } href="#" ref="hiking"><img className="image-button" src="./images/beer.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'hiking') } href="#" ref="hiking"><img className="image-button" src="./images/outdoors.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'dancing') } href="#" ref="hiking"><img className="image-button" src="./images/dancing.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'movies') } href="#" ref="hiking"><img className="image-button" src="./images/movies.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'relaxing') } href="#" ref="hiking"><img className="image-button" src="./images/relaxing.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'dive bar') } href="#" ref="hiking"><img className="image-button" src="./images/dive-bar.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'staycation') } href="#" ref="hiking"><img className="image-button" src="./images/staycation.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'brunch') } href="#" ref="hiking"><img className="image-button" src="./images/brunch.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'arts') } href="#" ref="hiking"><img className="image-button" src="./images/art-class.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'blind date') } href="#" ref="hiking"><img className="image-button" src="./images/blind-date.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'adventure') } href="#" ref="hiking"><img className="image-button" src="./images/adventure.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'winery') } href="#" ref="hiking"><img className="image-button" src="./images/winery.jpg" /></button>
        <button onClick={ this._doSearch.bind(this, 'comedy') } href="#" ref="hiking"><img className="image-button" src="./images/comedy.jpg" /></button>


    </div>
    )
  }
}

export default Search;
