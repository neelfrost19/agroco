import '@/styles/Features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            title: '100% Natural Ingredients',
            description:
                'Our tea bags are filled with premium, handpicked tea leaves and natural herbs—free from artificial flavors, colors, or preservatives.',
        },
        {
            id: 2,
            title: 'Sustainable and Eco-Friendly Packaging',
            description:
                'We offer a curated selection of unique and stylish decor items that you won’t find anywhere else, helping you create a truly personalized home.',
        },
        {
            id: 3,
            title: 'Easy to Brew and Enjoy',
            description:
                'No fuss, no mess. Simply steep, sip, and savor—perfect for busy mornings or relaxed evenings.',
        },
        {
            id: 4,
            title: 'Diverse Flavors for Every Palate',
            description:
                'Whether you prefer bold black teas, refreshing greens, soothing herbals, or fruity infusions, we’ve got a blend for every mood.',
        },
    ];

    return (
        <section className="features">
            <h2>Why <span>Choose Us</span> ?</h2>
            <h3>Our tea bags and boxes are designed for tea lovers who value quality, convenience, and sustainability without compromise.</h3>
            <div className="feature-list">
                {features.map((feature) => (
                    <div key={feature.id} className= {`feature-item ${feature.id % 2 === 0 ? 'even' : 'odd'}`} >
                        <span>
                            <p className="feature-number">{feature.id}</p>
                        </span>
                        <div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
