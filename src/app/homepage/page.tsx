import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import "@/styles/index.css";

const Page = () => {

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Categories />
            <Features />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Page;
