import ProductCard from "../../../shared-components/ProductCard";


const FeaturedProducts = () => {
    return (
        <div>
            <h2 className="w-fit mx-auto text-5xl text-gray-500 font-bold p-4 border-b-0 border-blue-500 hover:border-b-4 delay-300 transition-all mb-4">Features Products</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    [1, 2, 3, 4].map((_product, i) => (
                        <ProductCard key={i} />
                    ))
                }
            </section>
        </div>
    );
};

export default FeaturedProducts;