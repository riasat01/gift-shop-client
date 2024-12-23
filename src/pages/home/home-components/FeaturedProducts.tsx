import ProductCard from "../../../shared-components/ProductCard";


const FeaturedProducts = () => {
    return (
        <div>
            <h2>Features Products</h2>
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