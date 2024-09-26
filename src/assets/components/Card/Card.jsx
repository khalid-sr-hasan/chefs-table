import { BsClock } from "react-icons/bs";
import { ImFire } from "react-icons/im";
import PropTypes from "prop-types";

const Card = ({ card, handleCart }) => {
    const {
        calories,
        ingredients,
        preparing_time,
        recipe_image,
        recipe_name,
        short_description,
    } = card;

    return (
        <>
            <div>
                <div className="card p-4 w-full border-2 bg-base-100 shadow-xl">
                    <figure className="">
                        <img
                            src={recipe_image}
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="mt-5">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p className="text-base text-[#878787] border-b-2 py-4">
                            {short_description}
                        </p>
                        <div className="border-b-2 pb-5">
                            <h3 className="text-lg text-[#282828] py-3 font-medium">
                                Ingredients: {ingredients.length}
                            </h3>
                            {ingredients.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-md text-[#878787]"
                                >
                                    <li>{item}</li>
                                </p>
                            ))}
                        </div>
                        <div className="mt-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <BsClock />
                                    <span className="text-[#282828]">
                                        {preparing_time} minutes
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ImFire className="text-[#aa4203]" />
                                    <span className="text-[#282828]">
                                        {calories} calories
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleCart(card)}
                                className="mt-4 text-md font-medium py-3 px-6 rounded-full outline-non bg-[#0BE58A]"
                            >
                                Want to Cook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Card.propTypes = {
    card: PropTypes.object,
    handleCart: PropTypes.func,
};
export default Card;
