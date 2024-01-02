import Image from "next/image";

import { Typography } from "@/components/typographies/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownToLineIcon, CheckIcon, ForwardIcon, ListPlusIcon, MoreHorizontalIcon, ScissorsIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

type CardVideoProps = {
	// url?: string;
	src: string;
	srcAvatar: string;
	alt: string;
	altAvatar: string;
	avatarfallback: string;
	width: number;
	height: number;
	// timeStamp: number;a
	title: string;
	// href: string;
	account: string;
	followers: string;
	isVerify: boolean;
	// category?: string;
};

const CardVideoWatching = ({ alt, title, altAvatar, followers, isVerify, avatarfallback, srcAvatar, height, src, width, account }: CardVideoProps) => {
	// const humanizedDate = formatDistanceToNow(new Date(timeStamp), { includeSeconds: true }); // return Fri Nov 17 2023 15:38 GMT+0700 (Indochina Time)

	return (
		<div className="p-4">
			<Image
				alt={alt}
				src={src}
				width={width}
				height={height}
			/>
			<Typography
				component="p"
				variant="h6">
				{title}
			</Typography>

			<div className="flex flex-row items-center justify-between px-4 h-14">
				{/* Left */}
				<div className="flex items-center">
					<Avatar className="mr-2">
						<AvatarImage
							src={srcAvatar}
							alt={altAvatar}
						/>
						<AvatarFallback>{avatarfallback}</AvatarFallback>
					</Avatar>
					<div>
						<Typography
							component="p"
							variant="subtitle1"
							className="flex items-center font-semibold">
							{account}
							{isVerify === true && <CheckIcon className="ml-2 h-3 w-3 bg-muted-foreground rounded-xl text-primary-foreground" />}
						</Typography>
						<div className="flex gap-2">
							<Typography
								component="p"
								variant="subtitle2"
								className="font-thin">
								{followers}
							</Typography>
						</div>
					</div>
					{/* TODO:: ONCLICK TO OPEN MODAL */}
					<Button
						variant="ghost"
						className="rounded-3xl">
						Join
					</Button>

					<Select>
						<SelectTrigger className="w-[180px] rounded-3xl bg-muted">
							<SelectValue placeholder="Subscribed" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All</SelectItem>
							<SelectItem value="personalized">Personalized</SelectItem>
							<SelectItem value="none">None</SelectItem>
							<SelectItem value="unsubscribe">Unsubscribe</SelectItem>
						</SelectContent>
					</Select>
				</div>
				{/* RIGHT */}
				<div className="flex space-x-4">
					<div>
						<Button
							variant="secondary"
							className="rounded-3xl rounded-r-none text-primary ">
							<ThumbsUpIcon className="mr-2 h-5 w-5" /> 15K
						</Button>
						<Button
							variant="secondary"
							className="rounded-3xl rounded-l-none text-muted-foreground">
							<ThumbsDownIcon className="h-5 w-5" />
						</Button>
					</div>
					<Button
						variant="secondary"
						className="rounded-3xl">
						<ForwardIcon className="mr-2 h-5 w-5" />
						Share
					</Button>
					<Button
						variant="secondary"
						className="rounded-3xl">
						<ArrowDownToLineIcon className="mr-2 h-5 w-5" />
						Download
					</Button>
					<Button
						variant="secondary"
						className="rounded-3xl">
						<ScissorsIcon className="mr-2 h-5 w-5" />
						Clip
					</Button>
					<Button
						variant="secondary"
						className="rounded-3xl">
						<ListPlusIcon className="mr-2 h-5 w-5" />
						Save
					</Button>
					<Button
						variant="secondary"
						className="rounded-3xl">
						<MoreHorizontalIcon className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export { CardVideoWatching };
