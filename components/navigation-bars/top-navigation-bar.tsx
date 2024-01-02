"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { BellIcon, MenuIcon, YoutubeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { InputSearch } from "../inputs/input-search";
import { Logo } from "../sites/logo";
import { SwitcherLanguage } from "../switchers/language-switcher";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type TopNavigationBarProps = React.HTMLAttributes<HTMLHeadElement> & {};

const TopNavigationBar = ({ className }: TopNavigationBarProps) => {
	const $t = useTranslations();

	return (
		<header className={cn("stickty top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
			<div className="flex flex-row items-center justify-between px-4 h-14">
				{/* LEFT */}
				<div className="flex items-center">
					{/* <ButtonMenu /> */}
					<Button variant="ghost">
						<MenuIcon />
					</Button>

					<Logo />
				</div>

				{/* CENTER */}
				<div className="flex flex-1 items-center justify-center">
					<InputSearch placeholder={$t("search")} />
				</div>

				{/* RIGHT */}
				<div className="flex items-center gap-2">
					<SwitcherLanguage />
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="ghost">
									<YoutubeIcon className="h-5 w-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>{$t("create")}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="ghost">
									<BellIcon className="h-5 w-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>{$t("notification")}</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<Avatar>
						<AvatarImage
							src="https://github.com/shadcn.png"
							alt="@shadcn"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	);
};

const Placeholder = ({ placeholder = "Placeholder" }: { placeholder?: string }) => {
	return <div className="bg-secondary rounded-md border-dash px-3 py-2">{placeholder}</div>;
};

export { TopNavigationBar };
