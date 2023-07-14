import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../constants";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getRestaurant() {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, restaurants);

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants?.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))
        ) : (
          <h1>Restaurant Not Found</h1>
        )}
      </div>
    </>
  );
};
export default Body;
