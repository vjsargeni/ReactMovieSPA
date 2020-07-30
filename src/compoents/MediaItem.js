import React, { Component } from 'react'

export class MovieItem extends Component {

     onClick = (e) => {
         this.props.imdbID(this.props.movies.imdbID);
        };

    render() {
        //TODO pass a click back to App.js for more info
        return (
            <div>
                <h4>{this.props.movies.Title}</h4>
                <img 
                src={this.props.movies.Poster} 
                onClick= {this.onClick}
                alt={this.props.movies.Title + " Poster"}></img>   
            </div>
        )
    }
}

export default MovieItem
