import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

export default combineReducers({posts, auth}); // useSelector retrieves data from here (posts) state.posts