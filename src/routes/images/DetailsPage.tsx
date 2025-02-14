import { useGetImageQuery } from "@/services/api";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router";
import { ImageDetails } from "@/components";
import { SkeletonCard } from "@/components";
import { errorHandler } from "@/lib/errorHandler";
function DetailsPage() {
	let params = useParams();
	let navigate = useNavigate();
	const { data, isFetching, error } = useGetImageQuery(params.id);
	if (isFetching) {
		return (
			<div className="flex flex-col justify-center items-center gap-4 mt-12  mb-12">
				<SkeletonCard w={500} h={500} smallW={400} smallH={500} />
			</div>
		);
	}
	if (error) return <div className="text-red-500">{errorHandler(error)}</div>;
	return (
		<div>
			<Button className="mt-12 ml-12 mb-12" onClick={() => navigate("/")}>
				<ArrowLeft />
			</Button>

			<div>{data && <ImageDetails {...data} />}</div>
		</div>
	);
}

export default DetailsPage;
