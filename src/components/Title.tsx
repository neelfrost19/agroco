
import '@/styles/Title.css';
import Button from "./Button";

const Title = ({title}) => {

    const products = [
        {
            title: "Agroco Tea",
            description:
                "Agroco Tea offers a premium range of carefully curated tea blends crafted to elevate your daily tea experience into a moment of indulgence and wellness. Each blend is thoughtfully designed to deliver a balance of refreshing flavors and healthful benefits, making it the perfect companion for every mood and occasion. Whether you seek the calming embrace of soothing herbal teas, the revitalizing energy of robust black teas, or the gentle nourishment of herbal tea.",
            image: "path_to_tea_image",
            bgColor: "#E3F1DC",
        },
        {
            title: "Agroco Turmeric",
            description:
                "Agroco Turmeric is a natural, high-quality turmeric powder crafted to meet the highest standards of purity and potency. Rich in curcumin, the active compound responsible for turmeric's vibrant color and renowned health benefits, it is a versatile product that seamlessly integrates into culinary creations, wellness routines, and traditional remedies. Sourced from organically cultivated farms.",
            image: "path_to_turmeric_image",
            bgColor: "#FFF6E4",
        },
        {
            title: "Agroco Rice",
            description:
                "Agroco Rice is a carefully curated collection of premium grains, offering the finest varieties like fragrant basmati and aromatic jasmine. Known for their unmatched aroma, delicate flavor, and superior nutritional value, our rice is a testament to quality and tradition. Whether you're preparing a simple everyday meal or a lavish dish for a special occasion, Agroco Rice ensures exceptional taste and versatility in your cooking.",
            image: "path_to_rice_image",
            bgColor: "#E8F4E8",
        },
    ];

    return (
        <section className="title">
            <div className="title-container"></div>
            <div className="title-text"><h1>{title}</h1></div>
            <div className="product-container">
                {products.map((product, index) => (
                    <div className="product-card" style={{backgroundColor: product.bgColor}} key={index}>
                        <div className="product-image">
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div className="product-content">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                            <Button text= "Know More" color="green"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Title;
