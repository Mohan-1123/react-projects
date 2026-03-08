import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ name, rating, cuisines, image,id }) => {
  return (
    <Link to={`/restaurant/${id}`}>
    <div className="bg-gray-100 p-2 rounded-lg shadow-md w-64 h-64 flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer z-10">
      <img
        alt="rest-logo"
        className="w-full h-36 object-cover rounded-md rounded-tl-lg rounded-tr-lg shrink-0"
        src={IMAGE_URL + "/" + image}
      />
      <div className="flex flex-col flex-1 justify-between pt-1">
        <h3 className="font-bold text-sm leading-tight line-clamp-1">{name}</h3>
        <p className="text-xs text-gray-600 line-clamp-1">{cuisines}</p>
        <h4 className="text-xs font-semibold">Rating: {rating}</h4>
        <p className="text-xs">Cost for two: ₹300</p>
      </div>
    </div>
    </Link>
  );
};

export default RestaurantCard;
