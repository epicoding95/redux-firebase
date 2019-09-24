
// when we are using funk we will always return a function not an object
//so this is our action creator to do so
export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_PROJECT', project })
    }
};
//1st step is setting up this action creator.. it will always take dispatch but you can add getstate as needed
// next thing is importing this on the conponent you need to access it on