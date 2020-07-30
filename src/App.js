import React, { Component } from "react";
import Movies from "./compoents/Media";
import Search from "./compoents/Search";
import MediaInfoItem from "./compoents/MediaInfoItem";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    movies: [],
    errMsg: '',
    infocard: [],
    infoCardActive:false
  };

  //api call for movies/shows
  searchMovies = (title,type) => {
    axios
      .get(`http://www.omdbapi.com/?s=${title}&type=${type}&apikey=d5ed3baa`)
      .then((res) => {
        if (res.data.Response ==="True") {
          this.setState({ movies: res.data.Search });
          this.setState({errMsg: ''})
        }
        else {
          this.setState({errMsg: res.data.Error})
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  getInfoCard = (imdbID) => {
    this.setState({infoCardActive: true})
     axios
       .get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=d5ed3baa`)
       .then((res) => {
         this.setState({infocard: res.data})
         console.log(res.data)
        })
  }

  //TODO add click through from movie image

  //incase i need a ref, this runs automaticly
  // componentDidMount(){
  //   axios.get('http://www.omdbapi.com/?s=star wars&type=series&apikey=d5ed3baa')
  //    .then(res => this.setState({movies: res.data.Search}))
  // }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React OMDB Search Tool!</h1>
        <Search movies={this.state.movies} searchTitle={this.searchMovies} />
        <span>{this.state.errMsg}</span>
        <div>
          <Movies movies={this.state.movies} imdbID = {this.getInfoCard} />
        </div>
        <div>
          <MediaInfoItem info={this.state.infocard} active={this.state.infoCardActive}/>
        </div>
        
      </div>
    );
  }
}

export default App;
