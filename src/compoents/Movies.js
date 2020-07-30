import React, {Component } from 'react';
import MovieItem from './MovieItem'

class Movies extends Component {
    render(){
        return this.props.movies.map((movies) => (
         <MovieItem movies = {movies}/>
        ));
           
        
    }
}

export default Movies;