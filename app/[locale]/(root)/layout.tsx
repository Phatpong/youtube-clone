import { TopNavigationBar } from "@/components/navigation-bars/top-navigation-bar";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

// Can be imported from a shared config
const locales = ["en", "th"];

type LocaleLayout = {
	children: ReactNode;
	params: {
		locale: string;
	};
};

export default function LocaleLayout({ children, params: { locale } }: LocaleLayout) {
	if (!locales.includes(locale as any)) notFound();

	return (
		<div lang={locale}>
			<div className="flex flex-col">
				{/* NAV */}
				<TopNavigationBar />
			</div>
			{/* PAGE */}
			{children}
		</div>
	);
}
