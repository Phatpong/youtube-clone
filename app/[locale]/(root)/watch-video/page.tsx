import { CardVideoWatching } from "@/components/categories/card-video/card-video-watching";

type WatchVideoPageProps = {};

const WatchVideoPage = ({}: WatchVideoPageProps) => {
	return (
		<div>
			{/* VIDEO */}
			<CardVideoWatching
				isVerify={true}
				followers="149K subscribers"
				src="/messenger.jpg"
				alt="Antonio Clip"
				width={1400}
				height={600}
				title="Real-Time Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher (2023)"
				altAvatar="Antonio"
				avatarfallback="CD"
				srcAvatar="/Antonio.jpg"
				account="Code With Antonio"
			/>
		</div>
	);
};

export default WatchVideoPage;
