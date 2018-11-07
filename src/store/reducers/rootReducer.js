import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipeReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: recipeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
