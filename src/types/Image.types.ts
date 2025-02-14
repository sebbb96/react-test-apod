export type Image = {
	copyright?: string | undefined;
	date: string;
	explanation?: string | undefined;
	hdurl?: string | undefined;
	media_type: string | undefined;
	service_version: string | undefined;
	title: string | undefined;
	url: string | undefined;
	thumbnail_url?: string;
};

export type Images = Image[];
