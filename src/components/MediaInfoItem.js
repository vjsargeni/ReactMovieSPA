import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class MovieInfoItem extends Component {
  
  goBack = (e) => {
    this.props.active()
  }

  render() {
    //TODO implement an infocard for click through
    //TODO list ratings
    //TODO list TV rating and runtime
    //TODO handle shows vs movies
    return (
      <div>
        <Container>
          <button onClick={this.goBack}>Go back</button>
          <Row>
            <Col>
              <img
                src={this.props.info.Poster}
                alt={this.props.info.Title + " Poster"}
              ></img>
            </Col>
            <Col className="align-self-center">
              <h2>
                {this.props.info.Title} ({this.props.info.Year})
              </h2>
              <h3>
                {this.props.info.Runtime} ({this.props.info.Rated})
              </h3>
              <p>{this.props.info.Plot}</p>
            </Col>
          </Row>

          {/* <h4>{ this.props.active ? this.props.info.Ratings.map(
            (rating) => rating.Source + ' ' + rating.Value) : ''}
        </h4>  */}
        </Container>
      </div>
    );
  }
}

export default MovieInfoItem;
