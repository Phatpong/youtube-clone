import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

import { TopNavigationBar } from "@/components/navigation-bars/top-navigation-bar";
import { Logo } from "@/components/sites/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BellIcon, MenuIcon, YoutubeIcon } from "lucide-react";

// Can be imported from a shared config
const locales = ["en", "th"];

type LocaleLayout = {
	children: ReactNode;
	params: {
		locale: string;
	};
};

export default function LocaleLayout({ children, params: { locale } }: LocaleLayout) {
	const messages = useMessages();
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();
	// เป็นการบอกว่า อะไรที่ไม่อยู่ใน folder [locale] ให้ notFound()

	return (
		<html lang={locale}>
			<body className="flex flex-col">
				{/* NAV */}
				<TopNavigationBar
					left={
						<>
							{/* TODO:: LEFT-BAR-MENU */}
							<Button variant="ghost">
								<MenuIcon />
							</Button>
							<Logo />
						</>
					}
					center={
						<>
							<Input
								className="w-80 rounded-s-lg"
								placeholder="ค้นหา"
							/>
						</>
					}
					right={
						<>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button variant="ghost">
											<YoutubeIcon className="h-4 w-4" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>สร้าง</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<Button variant="ghost">
											<BellIcon />
										</Button>
									</TooltipTrigger>
									<TooltipContent>การแจ้งเตือน</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<Avatar>
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</>
					}
				/>
				{/* PAGE */}
				<NextIntlClientProvider
					locale={locale}
					messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
