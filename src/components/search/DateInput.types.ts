export type DateInputProps = {
	label: string;
	date: string | null | undefined;
	handleSelect: (arg: Date) => void;
	handleResetDate: () => void;
};
