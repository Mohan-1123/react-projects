import { useMemo, useState } from "react";
import { useRestaurants } from "../utils/useResturants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const isOnline = useOnlineStatus();
  const [searchTerm, setSearchTerm] = useState("");
  const { filteredCards } = useRestaurants();
  

  const filterData = useMemo(() => {
    return filteredCards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, filteredCards]);

  if (!isOnline) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-center text-red-500 mt-10">
          🔴 Offline, Please check your internet connection
        </h1>
        ;
      </div>
    );
  }

  return (
    <div className="background-gray-100 min-h-screen p-4">
      <div >
        <input
          type="text"
          placeholder="Search"
          className="w-52 p-2 border border-gray-300 rounded-md"
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {/* restaurant cards */}
        {filterData.length > 0 ? (
          filterData.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))
        ) : (
          <div className='text-center'>
            <p>No restaurants available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
