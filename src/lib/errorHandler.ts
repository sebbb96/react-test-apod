import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type Error = FetchBaseQueryError | SerializedError | undefined;

export function errorHandler(error: Error) {
	let errorMessage: string | undefined = "An unknown error occurred.";
	if (error) {
		if ("status" in error) {
			switch (error.status) {
				case 400:
					errorMessage = "Bad Request. Please try again.";
					break;
				case 404:
					errorMessage = "Images not found.";
					break;
				case 500:
					errorMessage = "Internal Server Error. Please try again later.";
					break;
				default:
					errorMessage = "An error occurred. Please try again.";
			}
		} else if ("message" in error) {
			errorMessage = error.message;
		}
	}
	return errorMessage;
}
