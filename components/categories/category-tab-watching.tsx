"use client";

import { listVideo } from "@/components/data/playlist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { CardVideoTabsWatching } from "./card-video/card-video-tabs-watching";

type CategoryTabsWatchingProps = {};

const CategoryTabsWatching = ({}: CategoryTabsWatchingProps) => {
	return (
		<Tabs
			defaultValue="all"
			className="w-full">
			<ScrollArea className="w-full">
				<TabsList className="space-x-4">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="music">Music</TabsTrigger>
					<TabsTrigger value="web development">Web Development</TabsTrigger>
					<TabsTrigger value="news">News</TabsTrigger>
					<TabsTrigger value="muscle">Muscle</TabsTrigger>
				</TabsList>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<TabsContent value="all">
				<div className="grid grid-cols-1 gap-2">
					{listVideo.map((list, listIndex) => (
						<CardVideoTabsWatching
							key={`${list.src} - ${listIndex}`}
							isVerify={list.isVerify}
							title={list.title}
							alt={list.alt}
							src={list.src}
							altAvatar={list.altAvatar}
							avatarfallback={list.avatarfallback}
							srcAvatar={list.srcAvatar}
							account={list.account}
							height={160}
							width={200}
							timeStamp={list.timeStamp}
							href={list.href}
							view={list.view}
						/>
					))}
					{listVideo.map((list, listIndex) => (
						<CardVideoTabsWatching
							key={`${list.src} - ${listIndex}`}
							isVerify={list.isVerify}
							title={list.title}
							alt={list.alt}
							src={list.src}
							altAvatar={list.altAvatar}
							avatarfallback={list.avatarfallback}
							srcAvatar={list.srcAvatar}
							account={list.account}
							height={160}
							width={200}
							timeStamp={list.timeStamp}
							href={list.href}
							view={list.view}
						/>
					))}
				</div>
			</TabsContent>
			<TabsContent value="music">Music</TabsContent>
			<TabsContent value="web development">This is a Web development</TabsContent>
			<TabsContent value="news">This is a News</TabsContent>
			<TabsContent value="muscle">This is a Muscle</TabsContent>
		</Tabs>
	);
};

export { CategoryTabsWatching };
