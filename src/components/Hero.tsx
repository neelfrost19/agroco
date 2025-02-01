import Image from "next/image";
import Button from "./Button";

import "@/styles/Hero.css";
import Carousel from "./Carousel";

const heroCards = [
    (
        // eslint-disable-next-line react/jsx-key
        <div className="hero-container green">
            <div className="hero-text">
                <h1>
                    <span className="text-green">Perfect Tea</span> Moments, Anytime, Anywhere.
                </h1>
                <p>
                    Discover the art of brewing with our premium tea crafted to deliver
                    flavor, aroma, and serenity in every sip.
                </p>
                <Button text="Explore Products" color="black"/>
            </div>
            <div className="hero-image">
                <img src="/images/tea.svg" alt="Tea cup with leaves"/>
            </div>
        </div>
    ),
    (
        // eslint-disable-next-line react/jsx-key
        <div className="hero-container orange">
            <div className="hero-text">
                <h1>
                    <span className="text-orange">Golden Goodness</span> for Health and Flavor.
                </h1>
                <p>
                    Experience the power of premium turmeric—naturally rich in curcumin,
                    perfect for boosting wellness and enhancing your recipes.
                </p>
                <Button text="Explore Products" color="black"/>
            </div>
            <div className="hero-image">
                <img  src="/images/tumeric.svg" alt="Tumeric"/>
            </div>
        </div>
    ),
    (
        // eslint-disable-next-line react/jsx-key
        <div className="hero-container grass">
            <div className="hero-text">
                <h1>
                    From Our Fields to Your Plate: <span className="text-grass">The Perfect Grain</span> Every Time.
                </h1>
                <p>
                    Discover premium-quality rice, grown with care and crafted for
                    flavor, aroma, and nutrition. Our rice is the perfect foundation
                    for your culinary creations.
                </p>
                <Button text="Explore Products" color="black"/>
            </div>
            <div className="hero-image">
                <img src="/images/rice.svg" alt="rice"/>
            </div>
        </div>
    )]


const Hero = () => (
    <section className="hero">
        <Carousel components={heroCards}/>
    </section>
);

export default Hero;
