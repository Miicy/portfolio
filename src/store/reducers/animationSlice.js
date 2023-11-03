import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAnimationEnabled: true,
};

const animationSlice = createSlice({
	name: "animation",
	initialState,
	reducers: {
		setAnimationFalse(state, action) {
			state.isAnimationEnabled = false;
		},
	},
});

export const { setAnimationFalse } = animationSlice.actions;

export const selectAnimation = (state) => state.animation.isAnimationEnabled;

export default animationSlice.reducer;
