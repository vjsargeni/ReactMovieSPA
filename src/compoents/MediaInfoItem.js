import React, { Component } from "react";

export class MovieInfoItem extends Component {
  render() {

    //TODO implement an infocard for click through 
    //TODO list ratings
    //TODO list TV rating and runtime
    //TODO handle shows vs movies
    return (
      <div>
        <h2>
          {this.props.info.Title} ({this.props.info.Year})
        </h2>
        <h3>
          {this.props.info.Runtime} ({this.props.info.Rated})
        </h3>
        
         {/* <h4>{ this.props.active ? this.props.info.Ratings.map(
            (rating) => rating.Source + ' ' + rating.Value) : ''}
        </h4>  */}
        <p>{this.props.info.Plot}</p>

        <img
          src={this.props.info.Poster}
          alt={this.props.info.Title + " Poster"}
        ></img>
      </div>
    );
  }
}

export default MovieInfoItem;
