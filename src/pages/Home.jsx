import { Hero } from "../components/home/hero";
import Main from "../components/home/main";
import SubContent from "../components/home/subContent/SubContent";
import Product from "../components/viewProducts";

const Home = () => {
    const productData = {
        name: "Cool Product",
        price: 199.99,
        shortDescription: "This is a cool product that does amazing things.",
        fullDescription:
            "Here is a more detailed description of the product, including its features, benefits, and any other relevant information.",
        inStock: true,
        images: [
            {
                id: 1,
                thumbnail: "/images/thumb1.jpg",
                full: "/images/full1.jpg",
            },
            {
                id: 2,
                thumbnail: "/images/thumb2.jpg",
                full: "/images/full2.jpg",
            },
            {
                id: 3,
                thumbnail: "/images/thumb3.jpg",
                full: "/images/full3.jpg",
            },
        ],
        features: ["Feature 1", "Feature 2", "Feature 3"],
    };

    return (
        <div>
            <Hero />
            <SubContent />
            <Main />
            <Product product={productData} />
        </div>
    );
};

export default Home;
