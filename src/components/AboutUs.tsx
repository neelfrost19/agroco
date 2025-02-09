
import '@/styles/AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us-container">
            <div className="about-us">
                <div className="about-us-images">
                    <img src="/images/tea_collage.svg" alt="Tea cup"/>
                </div>
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>
                        Our mission is simple: to bring you the finest tea experience with every sip. From ethically
                        sourced ingredients to sustainable packaging, we’re passionate about creating moments of
                        comfort and joy for tea lovers everywhere.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
