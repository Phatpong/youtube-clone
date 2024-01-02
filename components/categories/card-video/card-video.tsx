import { formatDistanceToNow } from "date-fns";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/typographies/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardVideoProps = {
	url?: string;
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

const CardVideo = ({ url, title, src, category, srcAvatar, avatarfallback, isVerify, account, alt, view, href, altAvatar, width, timeStamp, height }: CardVideoProps) => {
	const humanizedDate = formatDistanceToNow(new Date(timeStamp), { includeSeconds: true }); // return Fri Nov 17 2023 15:38 GMT+0700 (Indochina Time)

	return (
		<Link href={href}>
			{/* <ReactPlayer
				url={url}
				controls={true}
				width="320px"
				height="auto"
			/> */}
			<CardHeader>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
				/>
			</CardHeader>
			<CardContent className="flex flex-row">
				<Avatar className="mr-2">
					<AvatarImage
						src={srcAvatar}
						alt={altAvatar}
					/>
					<AvatarFallback>{avatarfallback}</AvatarFallback>
				</Avatar>
				<div>
					<CardTitle className="line-clamp-2">
						<Typography
							component="p"
							variant="h6">
							{title}
						</Typography>
					</CardTitle>
					<Typography
						className="flex items-center"
						component="p"
						variant="subtitle1">
						{account} {isVerify === true ? <CheckIcon className="ml-2 h-3 w-3 bg-muted-foreground rounded-xl text-primary-foreground" /> : null}
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
			</CardContent>
		</Link>
	);
};

export { CardVideo };
