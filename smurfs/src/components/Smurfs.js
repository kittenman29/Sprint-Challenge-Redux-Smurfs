import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { deleteFriend, updateSingleFriend, toggleShowUpdate } from '../actions';
// import UpdateFriendForm from './UpdateFriendForm';

class Smurfs extends Component {
//   handleDeleteFriend = () => {
//     const { id } = this.props.friendSelected;
//     this.props.deleteFriend(id);
//   };

//   handleShowFriend = friend => {
//     this.props.updateSingleFriend(friend);
//   };

//   toggleShowUpdate = () => {
//     this.props.toggleShowUpdate();
//   };
  render() {
    return (
      <div className="Smurfs-Container">
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            );
          })}
        {/* {Object.keys(this.props.friendSelected).length > 0 ? (
          <SelectedFriend
            handleShowFriend={this.handleShowFriend}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteFriend={this.handleDeleteFriend}
            selected={this.props.friendSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateFriendForm friend={this.props.friendSelected} />
        ) : null}
        {this.props.deletingFriend ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // deletingFriend: state.friendsReducer.deletingFriend,
    error: state.error
    // showUpdate: state.singleFriendReducer.showUpdate,
    // friendSelected: state.singleFriendReducer.friendSelected
  };
};

export default connect(mapStateToProps, {
//   deleteFriend,
//   updateSingleFriend,
//   toggleShowUpdate
})(Smurfs);