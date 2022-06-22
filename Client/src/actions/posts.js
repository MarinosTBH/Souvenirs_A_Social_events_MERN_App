import * as api from '../api'; // import everything from actions as api

export const getPosts = () => async (dispatch) => {        //Thunk is a function inside a function :: alows us to specify an additional func
    
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: []});

    } catch (error) {
        console.log(error.message)
    }

}

// Action creators are functions that return an action