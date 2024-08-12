import { Hero } from "../components/home/hero";
import Main from "../components/home/main";
import SubContent from "../components/home/subContent/SubContent";
import Product from "../components/viewProducts";

const Home = () => {
    return (
        <div>
            <Hero />
            <SubContent />
            <Main />
            <Product />
        </div>
    );
};

export default Home;
