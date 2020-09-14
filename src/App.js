import React, { Component } from "react";
import { connect } from "react-redux";

import { ambilData } from "./Action/Action.js";

export class App extends Component {
  componentDidMount() {
    this.props.ambilData();
  }

  renderList() {
    const listFilm = this.props.ambilData.data;
    if (!listFilm) {
      return "loading";
    }
    return listFilm.map((film) => {
      return (
        <div className="card">
          <h5 className="card-header">Movie No.{film.id}</h5>
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.listFilm.data);
    return (
      <div>
        <h1>App</h1>
        {this.renderList()}
      </div>
    );
  }
}

const stateToProps = (state) => {
  // console.log(state)
  return {
    listFilm: state.listFilm,
  };
};

export default connect(stateToProps, { ambilData })(App);
