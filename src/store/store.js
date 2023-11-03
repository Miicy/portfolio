import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animationReducer from "./reducers/animationSlice";

const rootReducer = combineReducers({
	animation: animationReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
