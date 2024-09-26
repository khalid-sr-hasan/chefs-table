import { useEffect, useState } from "react";
import CardGallary from "../CardGallary/CardGallary";
import Cooking from "../Cooking/Cooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("food.json")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const [cart, setCart] = useState([]);
    const handleCart = (selectedCard) => {
        const exist = cart.find(
            (item) => item.recipe_id === selectedCard.recipe_id
        );
        if (!exist) {
            setCart([...cart, selectedCard]);
        } else {
            toast("Already added");
        }
    };

    const [cook, setCook] = useState([]);

    const handleCook = (selectItem) => {
        console.log(selectItem);
        // const cookItemExist = cook.find(
        //     (item) => item.recipe_id === selectItem.recipe_id
        // );
        // setCook([...cook, selectItem]);

        // const remove = cart.filter(
        //     (item) => item.recipe_id !== selectItem.recipe_id
        // );
        // setCart(remove);
        const e = cart.filter(
            (item) => item.recipe_id !== selectItem.recipe_id
        );
        setCook([...cook, selectItem]);
        setCart(e);
    };
    return (
        <div>
            <ToastContainer autoClose={3000} />
            <div className="text-center px-4 my-12 md:px-0 lg:w-[823px] mx-auto">
                <h1 className="text-4xl font-semibold text-center text-[#150B2B]">
                    Our Recipes
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Proin et feugiat
                    senectus vulputate netus pharetra rhoncus. Eget urna
                    volutpat curabitur elementum mauris aenean neque.{" "}
                </p>
            </div>
            <div className="lg:flex justify-between lg:gap-5">
                <CardGallary product={product} handleCart={handleCart} />
                <Cooking cook={cook} cart={cart} handleCook={handleCook} />
            </div>
        </div>
    );
};

export default Recipes;
