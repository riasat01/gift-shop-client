import TestimonialCard from "../../../shared-components/TestimonialCard";

const Testimonials = () => {
    return (
        <div>
            <h2 className="w-fit mx-auto text-5xl text-gray-500 font-bold p-4 border-b-0 border-blue-500 hover:border-b-4 delay-300 transition-all mb-4">Testimonials</h2>
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