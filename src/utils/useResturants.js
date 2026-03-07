import { useState, useEffect } from "react";


export const useRestaurants = () => {
    const [filteredCards, setFilteredCards] = useState([]);


  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    // collect restaurants from all cards and deduplicate by id
    const seen = new Set();
    const restaurants = json.data.cards.flatMap((c) => {
      try {
        return c.card.card.gridElements.infoWithStyle.restaurants ?? [];
      } catch {
        return [];
      }
    }).filter((r) => {
      if (seen.has(r.info.id)) return false;
      seen.add(r.info.id);
      return true;
    });

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
    setFilteredCards(cleanData);
  };


    useEffect(() => {
        fetchData();
      }, []);

      return {filteredCards}
}
