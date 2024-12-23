import TestimonialCard from "../../../shared-components/TestimonialCard";


const Categories = () => {
    return (
        <div>
            <h2>Categories</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    [1, 1, 1, 1].map((_category, i) => (
                        <TestimonialCard key={i} />
                    ))
                }
            </section>
        </div>
    );
};

export default Categories;