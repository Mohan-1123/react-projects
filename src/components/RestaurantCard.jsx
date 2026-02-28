import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ name, rating, cuisines, image }) => {
  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-md w-64 hover:shadow-lg transition-shadow duration-300 cursor-pointer z-10">
      <img
        alt="rest-logo"
        className="w-full h-40 object-cover rounded-md rounded-tl-lg rounded-tr-lg"
        src={IMAGE_URL + "/" + image}
      />
      <h3 className=" font-bold pt-0.5 font-medium">{name}</h3>
      <p className="text-sm text-gray-600 py-0.5">{cuisines}</p>
      <h4 className="text-sm font-semibold py-0.5">Rating: {rating}</h4>
      <p className="text-sm py-0.5">Cost for two: ₹300</p>
    </div>
  );
};

export default RestaurantCard;
