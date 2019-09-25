


// when we are using funk we will always return a function not an object
//so this is our action creator to do so
export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        //make async call to database
        //this is giving us a reference to our firestore database 
        const firestore = getFirestore();
        //this is now adding this information into our database via the built in add method
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'kelar',
            authorLastName: 'crisp',
            authorId: 12345,
            createdAt: new Date()
            //this is an async call so we have to use the .then methods to handle it
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })


    }
};
//1st step is setting up this action creator.. it will always take dispatch but you can add getstate as needed
// next thing is importing this on the conponent you need to access it on