import { formatDistanceToNow } from "date-fns";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/typographies/typography";

type CardVideoTabsWatchingProps = {
	src: string;
	srcAvatar: string;
	alt: string;
	altAvatar: string;
	avatarfallback: string;
	width: number;
	height: number;
	timeStamp: number;
	title: string;
	href: string;
	account: string;
	view: string;
	isVerify: boolean;
	category?: string;
};

const CardVideoTabsWatching = ({ title, src, category, isVerify, account, alt, view, href, width, timeStamp, height }: CardVideoTabsWatchingProps) => {
	const humanizedDate = formatDistanceToNow(new Date(timeStamp), { includeSeconds: true }); // return Fri Nov 17 2023 15:38 GMT+0700 (Indochina Time)

	return (
		<Link
			href={href}
			className="flex">
			{/* <ReactPlayer
				url={url}
				controls={true}
				width="320px"
				height="auto"
			/> */}
			<div className="flex pl-4">
				<div>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
					/>
				</div>
				<div className="w-56">
					<Typography
						component="p"
						variant="subtitle1"
						className="font-semibold leading-5 line-clamp-2">
						{title}
					</Typography>

					<Typography
						className="flex items-center"
						component="p"
						variant="subtitle1">
						{account} {isVerify === true && <CheckIcon className="ml-2 h-3 w-3 bg-muted-foreground rounded-xl text-primary-foreground" />}
					</Typography>
					<div className="flex gap-2">
						<Typography
							component="p"
							variant="subtitle2"
							textColor="primary">
							{view}
						</Typography>
						<Typography
							component="p"
							variant="subtitle2"
							textColor="primary">
							{humanizedDate}
						</Typography>
					</div>
				</div>
			</div>

			{/* <CardContent className="flex">
				<div>
					
					</div>
				</div>
			</CardContent> */}
		</Link>
	);
};

export { CardVideoTabsWatching };
