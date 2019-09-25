import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
//importing redux firestore is our first step when syncing our data to the firestore, this only works if our fbconfig file has been composed as needed in the index file
import { firestoreReducer } from 'redux-firestore';
//the first thijgn you do is call "state" or what thew parameter is you pass in
//when doing mapstatetoprops the second thing you do is the name of the variable you want to call for the "props" and then the initial reducer youre wanting to call so in this case we call project
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //this line is to allow whatever component we want to to send data to firebase
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;



// 1st step is setting up the firestore reducer 
// 2nd step is to connect a component with a firestore connection which we will do in the dashboard component