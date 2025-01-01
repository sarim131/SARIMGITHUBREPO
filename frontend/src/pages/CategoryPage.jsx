import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();
	const { category } = useParams();

	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	const handleOpenPopup = (product) => {
		setSelectedProduct(product);
	};

	const handleClosePopup = () => {
		setSelectedProduct(null);
	};

	return (
		<div className="min-h-screen text-black bg-emerald">
			<div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h1 className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8">
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
					{products?.length === 0 && (
						<h2 className="text-3xl font-semibold text-emerald-400 text-center col-span-full">
							No products found
						</h2>
					)}

					{products?.map((product) => (
						<div
							key={product._id}
							onClick={() => handleOpenPopup(product)}
							className="cursor-pointer"
						>
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
