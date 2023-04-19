import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import experiencesReducer from "../reducers/experiencesReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
  experiences: experiencesReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;