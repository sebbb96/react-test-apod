import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import imagesSlice from "./imagesSlice";

const store = configureStore({
	reducer: {
		images: imagesSlice,
		[api.reducerPath]: api.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
