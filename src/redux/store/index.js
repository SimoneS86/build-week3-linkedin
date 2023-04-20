import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import postsReducer from "../reducers/postsReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
