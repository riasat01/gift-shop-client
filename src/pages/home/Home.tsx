import Banner from "./home-components/Banner";
import FAQ from "./home-components/FAQ";
import FeaturedProducts from "./home-components/FeaturedProducts";
import Testimonials from "./home-components/Testimonials";


const Home = () => {
    return (
        <>
            <Banner />
            <FeaturedProducts />
            <Testimonials />
            <FAQ />
        </>
    );
};

export default Home;