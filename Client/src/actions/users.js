import { FETCH_U_ALL, DELETE_USERS } from "../constants/actionTypes";
import * as api from '../api'; // import everything from actions as api

export const getUsers = () => async (dispatch) => {        //Redux Thunk is a function inside a function :: alows us to specify an additional func
    
    try {
        const { data } = await api.getUsers();
        dispatch({type: FETCH_U_ALL, payload: data});

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)

        dispatch({ type : DELETE_USERS , payload : id})
    } catch (error) {
        console.log(error);
    }
}