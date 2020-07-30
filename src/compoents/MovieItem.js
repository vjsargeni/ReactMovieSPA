import React, { Component } from 'react'

export class MovieItem extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.movies.Title}</h4>
                <img 
                src={this.props.movies.Poster} 
                alt={this.props.movies.Title + " Poster"}></img>    
            </div>
        )
    }
}

export default MovieItem
