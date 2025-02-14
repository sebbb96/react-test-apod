import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseURL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
import { Image, type Images } from "../types/Image.types";
export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
	tagTypes: ["Images"],
	endpoints: (builder) => ({
		getImagesData: builder.query<
		Images,
		{ page: number; date: string | null | undefined }
		>({
			query: ({ page, date }) => {
				if (date) {
					return `apod?api_key=${API_KEY}&date=${date}&thumbs=True`;
				} else {
					// Calculate the two dates based on the page number
					const today = new Date();
					const startDate = new Date(today);
					startDate.setDate(today.getDate() - page * 2);

					const endDate = new Date(startDate);
					endDate.setDate(startDate.getDate() - 1); // Previous day

					// Stop fetching after 7 days ago
					if (startDate.getDate() < today.getDate() - 6) return "";

					// Format dates as YYYY-MM-DD
					const startDateStr = startDate.toISOString().split("T")[0];
					const endDateStr = endDate.toISOString().split("T")[0];

					return `apod?api_key=${API_KEY}&start_date=${endDateStr}&end_date=${startDateStr}&thumbs=True`;
				}
			},
			transformResponse: (response: Image | Images) =>
				Array.isArray(response) ? response : [response],
		}),
		getImage: builder.query<Image, string | undefined>({
			query: (date) => `apod?api_key=${API_KEY}&date=${date}&thumbs=True`,
		}),
	}),
});

export const { useGetImagesDataQuery, useGetImageQuery } = api;
