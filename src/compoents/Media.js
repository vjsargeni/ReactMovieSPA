import React, {Component } from 'react';
import MovieItem from './MediaItem'

class Movies extends Component {
    render(){
        return this.props.movies.map((movies) => (
         <MovieItem key = {movies.imdbID} movies = {movies}/>
        ));
           
        
    }
}

export default Movies;