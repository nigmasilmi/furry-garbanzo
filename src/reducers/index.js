import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  posts: postReducer,
  users: usersReducer,
});

export default reducers;
