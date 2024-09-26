import Header from "./assets/components/Header/Header";
import Hero from "./assets/components/Hero/Hero";
import Recipes from "./assets/components/Recipes/Recipes";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <div className="container mx-auto">
                <Recipes />
            </div>
        </div>
    );
};

export default App;
