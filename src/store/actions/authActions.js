export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        //this is a built in method through firebase auth
        firebase.auth().signInWithEmailAndPassword(
            //this is where the suer information will be stored
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
            //actually better practice to put this in a full try/catch block
        }).catch((err) => {
            //we pass in err as the second parameter to receive the error in the reducer
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}


export const signOut = () => {
    return (dispatch, state, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT-SUCCESS' })
        });
    }
}