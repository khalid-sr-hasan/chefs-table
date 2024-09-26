import Card from "../Card/Card";
import PropTypes from "prop-types";
const CardGallary = ({ product, handleCart }) => {
    return (
        <div className="w-full lg:w-2/3">
            <div className="grid px-4 md:grid-cols-2 md:px-0 gap-5">
                {product.map((card) => (
                    <Card
                        key={card.recipe_id}
                        card={card}
                        handleCart={handleCart}
                    />
                ))}
            </div>
        </div>
    );
};
CardGallary.propTypes = {
    product: PropTypes.array,
    handleCart: PropTypes.func,
};
export default CardGallary;
