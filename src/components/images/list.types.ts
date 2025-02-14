import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Images } from "@/types/Image.types";

export interface ImageListProps {
	date: string | null | undefined;
	page: number;
	data: Images | undefined;
	isFetching: boolean;
	error: FetchBaseQueryError | SerializedError | undefined;
	handleNextPage: () => void;
	handlePreviousPage: () => void;
	handleResetPage: () => void;
}
