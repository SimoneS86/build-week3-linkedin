import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";

const bigReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;