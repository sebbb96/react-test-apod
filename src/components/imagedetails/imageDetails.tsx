import { Image } from "@/types/Image.types";

const ImageDetails: React.FC<Image> = (props) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col">
				<h1 className="px-6 text-2xl text-center">{props.title}</h1>
				<p className="text-md  md:text-xl text-center">{props.date}</p>
			</div>
			<p className="text-md  md:text-xl text-left px-12">{props.explanation}</p>

			<img
				src={props.hdurl ?? props.thumbnail_url}
				className="object-cover p-2 md:p-4"
			/>
		</div>
	);
};

export default ImageDetails;
