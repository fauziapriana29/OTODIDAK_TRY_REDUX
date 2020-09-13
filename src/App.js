import React, {Component} from 'react';
import { connect } from 'react-redux'

import { ambilData } from './Action/Action.js'


export class App extends Component {

  componentDidMount() {
    this.props.ambilData()
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }

}

const stateToProps = (state) => {
  return {
    listFilm : state.listFilm
  }
}

export default connect(stateToProps, {ambilData})(App);
