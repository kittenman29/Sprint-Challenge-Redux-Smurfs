/*
  Be sure to import in all of the action types from `../actions`
*/

import * as actionTypes from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_SMURFS_START:
      return { ...state, fetchingSmurfs: true};
    case actionTypes.FETCH_SMURFS_SUCCESS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case actionTypes.FETCH_SMURFS_FAILURE:
      return { ...state, error: action.payload };
    case actionTypes.ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case actionTypes.ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case actionTypes.ADD_SMURF_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
