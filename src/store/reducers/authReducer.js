
const initState = {
    authError: null
}
//after this reducer is setup to handle the action creator all you have to do is call the action creator in the component
const authReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('errorrr');
            return {
                ...state,
                authError: ' login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success');
            return {
                ...state, authError: null
            }

        case 'SIGNOUT-SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        default:
            return state;
    }
}
export default authReducer;