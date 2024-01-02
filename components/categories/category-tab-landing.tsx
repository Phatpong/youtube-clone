"use client";

import { CardVideo } from "@/components/categories/card-video/card-video";
import { listVideo } from "@/components/data/playlist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const CategoryTabs = (props: Props) => {
	return (
		<Tabs
			defaultValue="all"
			className="w-full">
			<TabsList className="space-x-4">
				<TabsTrigger value="all">All</TabsTrigger>
				<TabsTrigger value="music">Music</TabsTrigger>
				<TabsTrigger value="web development">Web Development</TabsTrigger>
				<TabsTrigger value="news">News</TabsTrigger>
				<TabsTrigger value="muscle">Muscle</TabsTrigger>
			</TabsList>
			<TabsContent value="all">
				<div className="flex">
					<div className="grid grid-cols-4 gap-4">
						{listVideo.map((list, listIndex) => (
							<CardVideo
								key={`${list.src} - ${listIndex}`}
								isVerify={list.isVerify}
								title={list.title}
								alt={list.alt}
								src={list.src}
								altAvatar={list.altAvatar}
								avatarfallback={list.avatarfallback}
								srcAvatar={list.srcAvatar}
								account={list.account}
								height={list.height}
								width={list.width}
								timeStamp={list.timeStamp}
								href={list.href}
								view={list.view}
							/>
						))}
					</div>
				</div>
			</TabsContent>
			<TabsContent value="music">Music</TabsContent>
			<TabsContent value="web development">This is a Web development</TabsContent>
			<TabsContent value="news">This is a News</TabsContent>
			<TabsContent value="muscle">This is a Muscle</TabsContent>
		</Tabs>
	);
};

export { CategoryTabs };
