import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import postsReducer from "../reducers/postsReducer";
import jobReducer from "../reducers/jobReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
  posts: postsReducer,
  job: jobReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;

