import { getSmurfs } from '../actions'

import React, { Component } from 'react';
import { connect } from "react-redux";

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
    console.log(this.props.smurfs);
    return (
        <div className="App">
          <section id='main-content'>
          {this.props.smurfs.map((smurf, index) => {
              return (
                <div key={index.name}>
                  <p>{smurf.name}</p>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                </div>
              )})}
            </section>
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
