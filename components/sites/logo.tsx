import Image from "next/image";
import Link from "next/link";

type LogoProps = {};

const Logo = ({}: LogoProps) => {
	return (
		<Link href="/">
			<div className="hidden md:flex items-center gap-x-2 transition hover:opacity-75">
				<Image
					src="/logo.png"
					alt="logo"
					height={88}
					width={88}
				/>
			</div>
		</Link>
	);
};

export { Logo };
