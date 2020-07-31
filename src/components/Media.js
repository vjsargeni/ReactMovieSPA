import React, {Component } from 'react';
import MovieItem from './MediaItem'

class Movies extends Component {
    passImdb = (id)=> {this.props.imdbID(id) }

    render(){
        return this.props.movies.map((movies) => (
         <MovieItem key = {movies.imdbID} movies = {movies} imdbID = {this.passImdb}/>
        ));
           
        
    }
}

export default Movies;