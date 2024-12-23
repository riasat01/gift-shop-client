import Banner from "./home-components/Banner";
import Categories from "./home-components/Categories";
import FAQ from "./home-components/FAQ";
import FeaturedProducts from "./home-components/FeaturedProducts";
import Testimonials from "./home-components/Testimonials";


const Home = () => {
    return (
        <>
            <Banner />
            <section className="container mx-auto flex flex-col gap-4 md:gap-8 lg:gap-12">
                <FeaturedProducts />
                <Testimonials />
                <Categories />
                <FAQ />
            </section>
        </>
    );
};

export default Home;