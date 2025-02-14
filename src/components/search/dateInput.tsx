import { format } from "date-fns";
import { CalendarIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { DateInputProps } from "./DateInput.types";
const today = new Date();
function DateInput({
	label,
	handleSelect,
	handleResetDate,
	date,
}: DateInputProps) {
	const [open, setIsOpen] = useState(false);
	const handleReset = () => handleResetDate();
	const handleSelectedDate = (selectedDate: Date | undefined) => {
		if (selectedDate) {
			// Use UTC to avoid timezone issues
			handleSelect(selectedDate);
			setIsOpen(false);
		}
	};
	return (
		<div className="flex flex-col">
			<p>{label}</p>
			<Popover open={open} onOpenChange={setIsOpen}>
				<div className="relative">
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[240px] justify-start text-left font-normal",
								!date && "text-muted-foreground",
							)}
						>
							{date ? <>{format(new Date(date), "PPP")}</> : (
								<>
									<CalendarIcon />
									<span>Pick a date</span>
								</>
							)}
						</Button>
					</PopoverTrigger>
					{date && (
						<XIcon
							className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
							onClick={handleReset}
						/>
					)}
				</div>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						disabled={{ after: today }}
						mode="single"
						selected={date ? new Date(date) : undefined}
						onSelect={handleSelectedDate}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
export default DateInput;
