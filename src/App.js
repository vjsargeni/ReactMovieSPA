import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Movies from "./components/Media";
import Search from "./components/Search";
import MediaInfoItem from "./components/MediaInfoItem";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/pages/About';
import Header from './components/Header';

import "./App.css";

class App extends Component {
  state = {
    movies: [],
    errMsg: "",
    infocard: [],
    infoCardActive: false,
  };

  //TODO: work on CSS, add mobile configs?

  //api call for movies/shows
  searchMovies = (title, type) => {
    this.setState({ infoCardActive: false });
    axios
      .get(`https://www.omdbapi.com/?s=${title}&type=${type}&apikey=d5ed3baa`)
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
      .get(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=d5ed3baa`)
      .then((res) => {
        this.setState({ infocard: res.data });
      });
  };

  backToMovieList = (active) => {
    this.setState({ infoCardActive: false });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route
            exact path="/"
            render={(props) => (
              <React.Fragment>
                <Search
                  movies={this.state.movies}
                  searchTitle={this.searchMovies}
                />
                <span>{this.state.errMsg}</span>
                <div className="movieSpace">
                  {!this.state.infoCardActive && (
                    <Movies
                      movies={this.state.movies}
                      imdbID={this.getInfoCard}
                    />
                  )}
                </div>

                <div className="movieSpace">
                  {this.state.infoCardActive && (
                    <MediaInfoItem
                      info={this.state.infocard}
                      active={this.backToMovieList}
                    />
                  )}
                </div>
              </React.Fragment>
            )}
          />
          <Route path ='/about' component={About}
          />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
