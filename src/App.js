import React, { Component } from 'react';
import Movies from "./compoents/Movies";
import Search from './compoents/Search';
import axios from'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    movies: []
  }

  //api call for movies/shows
  searchMovies = (title) => {
     axios.get(`http://www.omdbapi.com/?s=${title}&type=series&apikey=d5ed3baa`)
     .then(res => this.setState({movies: res.data.Search}))
     //TODO failure callback messaging
   }
   

  //TODO add click through from movie image 

  //incase i need a ref, this runs automaticly
  // componentDidMount(){
  //   axios.get('http://www.omdbapi.com/?s=star wars&type=series&apikey=d5ed3baa')
  //    .then(res => this.setState({movies: res.data.Search}))
  // }
  
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
