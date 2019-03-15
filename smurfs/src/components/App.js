import { getSmurfs, addNewSmurf } from '../actions'

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
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value 
      }
    });
  };

  addNewSmurf = event => {
    event.preventDefault();
    this.props.addNewSmurf(this.state.newSmurf);
  };

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
          <form onSubmit={(e) => this.props.addNewSmurf(e, this.props.smurf)}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.props.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.props.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.props.height}
              name="height"
            />
            <button type="submit">Add new Smurf</button>
          </form>
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
  { getSmurfs, addNewSmurf }
)(App);
