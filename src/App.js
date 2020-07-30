import React, { Component } from 'react';
import Movies from "./compoents/Movies";
import Search from './compoents/Search';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    movies: [{
      "Title": "Lego Star Wars: All-Stars",
      "Year": "2018–",
      "imdbID": "tt9297164",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTEwMzhiNjUtOTA3My00MDljLTgxMmItYzdiMTIwYjRjZTM0XkEyXkFqcGdeQXVyMjA0MzE3ODI@._V1_SX300.jpg"
    }]
  }
  render(){
    return (
      <div className="App" >
        <img src={logo} className="App-logo" alt="logo"  />
          <h1>React OMDB Search Tool!</h1>
          <Search movies ={this.state.movies}/>
          <Movies movies ={this.state.movies}/>
          
        
      </div>
  );
  }
}

export default App;
