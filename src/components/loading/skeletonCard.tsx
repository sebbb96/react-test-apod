import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonProps } from "./loading.types";

const SkeletonCard: React.FC<SkeletonProps> = ({ h, w, smallW, smallH }) => {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton
				className={`h-[${smallH}px] w-[${smallW}px] lg:h-[${h}px] lg:w-[${w}px] rounded-xl bg-gray-200`}
			/>
		</div>
	);
};

export default SkeletonCard;
