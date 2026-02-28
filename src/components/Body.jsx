import React, { useMemo, useState, useEffect, useCallback } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const isOnline = useOnlineStatus();
  const [restCards, setRestCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [filteredCards, setFilteredCards] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    const restaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    const cleanData = restaurants?.map((r) => ({
      id: r.info.id,
      name: r.info.name,
      image: r.info.cloudinaryImageId,
      rating: r.info.avgRating,
      ratings: r.info.totalRatingsString,
      cuisines: r.info.cuisines.join(", "),
      cost: r.info.costForTwo,
      delivery: {
        time: r.info.sla.deliveryTime + " mins",
        distance: r.info.sla.lastMileTravel + " km",
        estimate: r.info.sla.slaString,
      },
      open: r.info.isOpen,
      link: r.cta.link,
    }));
    setRestCards(cleanData);
    setFilteredCards(cleanData);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food"
          onKeyUp={(e) => debouncedSearchHandler(e.target.value)}
        />
        {/* <button className="search-btn" >Search</button> */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {/* restaurant cards */}
        {filteredCards.length > 0 ? (
          filteredCards.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
