import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
//import locationSlice from '../reducers/locationSlice'
import userSlice from '../reducers/userSlice'

const reducer = combineReducers({
  user: userSlice
});

const store = configureStore({
  reducer
});

export default store;