import Image from "next/image";
import '@/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h5>AGROCO</h5>
                    <div className="footer-section-content">
                        <img src="/images/phone_line.svg" alt="phone"/>
                        <p>+91 5697452361</p>
                    </div>
                    <div className="footer-section-content">
                        <img src="/images/mail_line.svg" alt="mail"/>
                        <p>argoco@gmail.com</p>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Menu</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Categories</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Purchasing Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Office Hours</h4>
                    <p>9:00 PM - 6:00 PM</p>
                    <p>Monday–Friday</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
