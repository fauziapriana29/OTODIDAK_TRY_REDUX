import React, { Component } from "react";
import { connect } from "react-redux";

import { ambilData } from "./Action/Action.js";

export class App extends Component {
  componentDidMount() {
    this.props.ambilData();
  }

  displayList() {

    if (!this.props.listFilm.data) {
      return null;
    }

    const filmData = this.props.listFilm.data;
    
    

    return filmData.map(film => {
      return (
        <div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Producer</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{film.id}</th>
                <td>{film.title}</td>
                <td>{film.release_date}</td>
                <td>{film.producer}</td>
                <td>
                  <button className="btn btn-secondary">Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.listFilm.data);
    return (
      <div>
        <h1>App</h1>
        {this.displayList}
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
