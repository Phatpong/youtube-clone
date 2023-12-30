import { useTranslations } from "next-intl";

const HomePage = () => {
	const $t = useTranslations();
	return <section>{$t("title")}</section>;
};

export default HomePage;
