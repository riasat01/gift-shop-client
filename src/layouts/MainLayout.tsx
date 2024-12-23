import { Outlet } from "react-router";
import Navbar from "../shared-components/Navbar";
import Footer from "../shared-components/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen">
                <Outlet />
            </section>
            <Footer />
        </>
    );
};

export default MainLayout;