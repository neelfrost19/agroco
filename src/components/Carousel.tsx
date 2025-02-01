"use client";
import { useState } from "react";
import Image from "next/image";
import "@/styles/Carousel.css";

const Carousel = ({ components }) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleNext = () => {
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
        }, 500);

    };

    const handlePrev = () => {
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
        }, 500);
    };

    return (
        <div className="carousel">
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {components.map((component, index) => (
                    <div className="carousel-slide" key={index}>
                        {component}
                    </div>
                ))}
            </div>
            <div className="carousel-container">
                <button className="carousel-button" onClick={handlePrev}>
                    <img
                        style={{ transform: "rotate(180deg)" }}
                        src="/images/arrow-right-line.svg"
                        alt="prev"
                    />
                </button>
                <div className="carousel-dots dot">
                    {components.map((_, index) => (
                        <span
                            className={`dot ${currentIndex === index ? "active" : ""}`}
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                <button className="carousel-button" onClick={handleNext}>
                    <img src="/images/arrow-right-line.svg" alt="next" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
