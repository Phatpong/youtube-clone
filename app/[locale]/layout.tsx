import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

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

	if (!locales.includes(locale as any)) notFound();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider
					locale={locale}
					messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
