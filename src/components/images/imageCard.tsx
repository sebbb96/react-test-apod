import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Image } from "@/types/Image.types";

const ImageCard: React.FC<Image> = (props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="w-[200px] md:w-[250px] lg:w-[300px] ">
					{props.title}
				</CardTitle>
				<CardDescription>{props.date}</CardDescription>
			</CardHeader>
			<CardContent>
				<img
					alt={props.title}
					loading="lazy"
					className="object-cover w-[100%] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] max-w-[500px]  rounded-sm "
					src={props.hdurl ?? props.thumbnail_url}
				/>
			</CardContent>
		</Card>
	);
};
export default ImageCard;
