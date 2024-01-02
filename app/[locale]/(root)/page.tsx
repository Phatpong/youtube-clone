import { CategoryTabs } from "@/components/categories/category-tab-landing";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
	return (
		<div className="p-4">
			{/* CATEGORYTABS :: VIDEO  */}
			<CategoryTabs />
		</div>
	);
};

export default HomePage;
