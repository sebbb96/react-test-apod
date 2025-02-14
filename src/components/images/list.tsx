import { useEffect } from "react";
import { Link } from "react-router";
import ImageCard from "./imageCard";
import { SkeletonCard } from "../loading";
import { Button } from "../ui/button";
import { errorHandler } from "@/lib/errorHandler";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "@/components/ui/pagination";
import { ImageListProps } from "./list.types";

const ImageList: React.FC<ImageListProps> = ({
	date,
	page,
	handleNextPage,
	handlePreviousPage,
	data,
	isFetching,
	error,
	handleResetPage,
}) => {
	// Reset pagination if a user selects a date
	useEffect(() => {
		if (date) {
			handleResetPage();
		}
	}, [date]);

	// Show loading when fetching
	if (isFetching) {
		return (
			<div className="flex flex-col gap-4">
				<SkeletonCard w={500} h={500} smallW={300} smallH={300} />
				<SkeletonCard w={500} h={500} smallH={300} smallW={300} />
			</div>
		);
	}

	if (error) return <div className="text-red-500">{errorHandler(error)}</div>;
	return (
		<div className="flex flex-col gap-4 pb-12">
			{data &&
				data.map((img) => (
					<Link key={img.date} to={`/details/${img.date}`}>
						<ImageCard {...img} />
					</Link>
				))}

			{/* Pagination Controls */}
			{!date && (
				<Pagination>
					<PaginationContent className="flex justify-center gap-4 mt-4">
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => {
									handlePreviousPage();
									window.scrollTo(0, 0);
								}}
								disabled={page === 0}
							>
								Previous
							</Button>
						</PaginationItem>
						<PaginationItem>
							<span className="text-sm font-medium">Page {page + 1} / 4</span>
						</PaginationItem>
						<PaginationItem>
							<Button
								variant="outline"
								onClick={() => {
									handleNextPage();
									window.scrollTo(0, 0);
								}}
								disabled={page === 3} // Stop at page 4
							>
								Next
							</Button>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</div>
	);
};

export default ImageList;
