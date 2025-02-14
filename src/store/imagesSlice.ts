import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImagesState {
	value: string | null | undefined;
}
const initialState: ImagesState = {
	value: null,
};
const imagesSlice = createSlice({
	name: "images",
	initialState,
	reducers: {
		setDate: (state, action: PayloadAction<string | undefined>) => {
			state.value = action.payload;
		},
	},
});

export const { setDate } = imagesSlice.actions;
export default imagesSlice.reducer;
