import React, { Component } from "react";
import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class MovieItem extends Component {
  onClick = (e) => {
    this.props.imdbID(this.props.movies.imdbID);
  };

  render() {
    return (
      <div>
        <Container>
          <Col>
            <h4>{this.props.movies.Title}</h4>
            <img
              src={this.props.movies.Poster}
              onClick={this.onClick}
              alt={this.props.movies.Title + " Poster"}
            ></img>
          </Col>
        </Container>
      </div>
    );
  }
}

export default MovieItem;
