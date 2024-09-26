import PropTypes from "prop-types";
const Cooking = ({ cart, handleCook, cook }) => {
    let totalCookingTime = 0;
    let totalCalories = 0;
    for (const time of cook) {
        totalCookingTime = totalCookingTime + time.preparing_time;
        totalCalories = totalCalories + time.calories;
    }
    return (
        <div className="px-4 mt-10 md:px-0 md:mt-10 lg:mt-0 lg:w-1/3">
            <div className="border-2 rounded-xl md:sticky md:top-5 pb-5">
                <div>
                    <div className="text-center py-4 border-b-2 lg:max-w-[350px] mx-auto ">
                        <h2 className="font-bold">
                            Want to cook: {cart.length}
                        </h2>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {cart.map((cartItem, index) => {
                                        const {
                                            recipe_name,
                                            preparing_time,
                                            calories,
                                        } = cartItem;
                                        return (
                                            <tr
                                                key={index}
                                                className="bg-base-200"
                                            >
                                                <th>{index + 1}</th>
                                                <td>{recipe_name}</td>
                                                <td>{preparing_time} min</td>
                                                <td>{calories} calories</td>
                                                <td className="">
                                                    <button
                                                        onClick={() =>
                                                            handleCook(cartItem)
                                                        }
                                                        className="text-md outline-none font-medium py-2 px-4 rounded-full outline-non bg-[#0BE58A]"
                                                    >
                                                        Preparing
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center mt-5 py-4 border-b-2 lg:max-w-[350px] mx-auto ">
                        <h2 className="font-bold">
                            Currently cooking: {cook.length}
                        </h2>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {cook.map((item, index) => {
                                        const {
                                            recipe_name,
                                            preparing_time,
                                            calories,
                                        } = item;
                                        return (
                                            <tr
                                                key={index}
                                                className="bg-base-200"
                                            >
                                                <th>{index + 1}</th>
                                                <td>{recipe_name}</td>
                                                <td>{preparing_time} min</td>
                                                <td>{calories} calories</td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="text-sm font-bold">
                                            Total Time = {totalCookingTime}{" "}
                                            minutes
                                        </td>
                                        <td className="text-sm font-bold">
                                            Total Calories = {totalCalories}
                                            minutes
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Cooking.propTypes = {
    cart: PropTypes.array,
    handleCook: PropTypes.func,
    cook: PropTypes.array,
};
export default Cooking;
