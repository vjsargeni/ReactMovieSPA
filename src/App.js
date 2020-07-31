import React, { Component } from "react";
import Movies from "./components/Media";
import Search from "./components/Search";
import MediaInfoItem from "./components/MediaInfoItem";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";


import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    movies: [],
    errMsg: "",
    infocard: [],
    infoCardActive: false,
  };

  //TODO:
  //CSS: style movie display
  //CSS: style movie card
  //CSS: Style main page
  //Add routing (about page)

  //api call for movies/shows
  searchMovies = (title, type) => {
    this.setState({ infoCardActive: false });
    axios
      .get(`http://www.omdbapi.com/?s=${title}&type=${type}&apikey=d5ed3baa`)
      .then((res) => {
        if (res.data.Response === "True") {
          this.setState({ movies: res.data.Search });
          this.setState({ errMsg: "" });
        } else {
          this.setState({ errMsg: res.data.Error });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //retuns detailed info about a movie or show
  getInfoCard = (imdbID) => {
    this.setState({ infoCardActive: true });
    axios
      .get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=d5ed3baa`)
      .then((res) => {
        this.setState({ infocard: res.data });
        console.log(res.data); //todo remove later
      });
  };

  backToMovieList = (active) => {
    this.setState({infoCardActive: false})
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React OMDB Search Tool!</h1>
        <Search movies={this.state.movies} searchTitle={this.searchMovies} />
        <span>{this.state.errMsg}</span>
        <div className='movieSpace'>
          {!this.state.infoCardActive && (
            <Movies movies={this.state.movies} imdbID={this.getInfoCard} />
          )}
        </div>
        <Container>
          <div className='movieSpace'>
          {this.state.infoCardActive && (
            <MediaInfoItem
              info={this.state.infocard}
              active={this.backToMovieList}
            />)}
          </div>
        </Container>
          
      </div>
    );
  }
}

export default App;
