import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({posts}); // useSelector retrieves data from here (posts) state.posts