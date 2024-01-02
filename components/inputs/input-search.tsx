import { MicIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputSearchProps = {
	placeholder: string;
};

const InputSearch = ({ placeholder }: InputSearchProps) => {
	return (
		<div className="flex ">
			<Input
				className={cn("rounded-none rounded-l-xl w-96")}
				placeholder={placeholder}
			/>
			<Button
				variant="secondary"
				className="rounded-none rounded-r-xl border">
				<SearchIcon className="h-5 w-5" />
			</Button>

			<Button
				variant="secondary"
				className="ml-4 rounded-full">
				<MicIcon />
			</Button>
		</div>
	);
};

export { InputSearch };
