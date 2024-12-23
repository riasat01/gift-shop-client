import TestimonialCard from "../../../shared-components/TestimonialCard";

const Testimonials = () => {
    return (
        <div>
            <h2>Testimonials</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    [1, 1, 1, 1].map((_data, i) => (
                        <TestimonialCard key={i} />
                    ))
                }
            </section>
        </div>
    );
};

export default Testimonials;