import Image from "next/image";
import "@/styles/Categories.css";

const categories = [
    { title: "Lemon Tea", description: "Experience the refreshing and antioxidant-rich goodness of our premium lemon teas.", image: "/images/categ.svg" },
    { title: "Herbal Tea", description: "Relax and rejuvenate with caffeine-free herbal blends crafted from soothing herbs and flowers.", image: "/images/herbal.svg" },
    { title: "Ginger Tea", description: "Indulge in delicate flavors with teas infused with Ginger.", image: "/images/ginger.svg" },
    { title: "Black Tea", description: "Bold and full-bodied, our black teas are perfect for a robust start to your day.", image: "/images/black.svg" },
];

const Categories = () => (
    <section className="categories">
        <h2>Categories</h2>
        <p>From invigorating blends to calming infusions, find the perfect tea for every moment and mood</p>
        <div className="category-list">
            {categories.map((cat) => (
                <div className="category-item" key={cat.title}>
                    <img src={cat.image} alt={cat.title} />
                    <div className="category-item-text">
                        <h3>{cat.title}</h3>
                        <p>{cat.description}</p>
                    </div>

                </div>
            ))}
        </div>
    </section>
);

export default Categories;
