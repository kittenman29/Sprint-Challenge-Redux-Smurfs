import { getSmurfs } from '../actions'

import React, { Component } from 'react';
import { connect } from "react-redux";

import Smurfs from './Smurfs';
import SmurfsForm from './SmurfsForm';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">Smurfs</h1>
          <SmurfsForm />
        </header>
        {this.props.error ? <h3>Error Fetching Friends</h3> : null}
        <div className="Flex-Container">
          {this.props.fetchingSmurfs ? (
            <h3>Having trouble summoning the smurfs</h3>
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
   fetchingSmurfs: state.fetchingSmurfs,
  //  addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
