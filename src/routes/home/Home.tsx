import { DateInput, ImageList } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setDate } from "@/store/imagesSlice";
import { useState } from "react";
import { useGetImagesDataQuery } from "@/services/api";
function Home() {
	const dispatch = useDispatch();
	const date = useSelector((state: RootState) => state.images.value);
	const [page, setPage] = useState(0);
	const { data, error, isFetching } = useGetImagesDataQuery({ page, date });
	const handleNextPage = () => setPage((prev) => prev + 1);
	const handlePreviousPage = () => setPage((prev) => prev - 1);
	const handleResetPage = () => setPage(0);
	const handleSelect = (selectedDate: Date) => {
		const utcDate = new Date(
			Date.UTC(
				selectedDate.getFullYear(),
				selectedDate.getMonth(),
				selectedDate.getDate(),
			),
		);
		dispatch(setDate(utcDate.toISOString().split("T")[0]));
	};
	const handleResetDate = () => dispatch(setDate(undefined));
	const ImageListProps = {
		page: page,
		date: date,
		data: data,
		isFetching: isFetching,
		error: error,
		handlePreviousPage: handlePreviousPage,
		handleNextPage: handleNextPage,
		handleResetPage: handleResetPage,
	};
	return (
		<>
			<div className="flex flex-col gap-8 justify-center items-center mt-24 px-4 md:px-8">
				<DateInput
					label="Search by date"
					handleSelect={handleSelect}
					date={date}
					handleResetDate={handleResetDate}
				/>
				<ImageList {...ImageListProps} />
			</div>
		</>
	);
}

export default Home;
