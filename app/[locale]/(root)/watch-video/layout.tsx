import { CategoryTabsWatching } from "@/components/categories/category-tab-watching";
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
			{/* PAGE */}
			<div className="flex flex-rows">
				<div className="w-full">{children}</div>
				<div className="w-96">
					<CategoryTabsWatching />
				</div>
			</div>
		</div>
	);
}
