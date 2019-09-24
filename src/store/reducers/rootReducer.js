import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
//the first thijgn you do is call "state" or what thew parameter is you pass in
//when doing mapstatetoprops the second thing you do is the name of the variable you want to call for the "props" and then the initial reducer youre wanting to call so in this case we call project
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;