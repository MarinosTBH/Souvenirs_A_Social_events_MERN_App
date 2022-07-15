import { FETCH_U_ALL, DELETE_USERS } from '../constants/actionTypes';

export default (users = [], action) => {
    switch (action.type){

        case FETCH_U_ALL:  
            return action.payload;

        case DELETE_USERS : 
            return users.filter((user)=> user._id !== action.payload)

        // case BLOCK :
        
        default :
            return users
    }
}