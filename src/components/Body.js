import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import { API_URL } from "../constants";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const [restaurants, setRestaurant] = useState([]);

  // async function getRestaurant() {
  //   try {
  //     const data = await fetch(API_URL);
  //     const json = await data.json();

  //     setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  //     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // console.log(restaurants);

  // useEffect(() => {
  //   getRestaurant();
  // }, []);

  const restaurants = useRestaurant();

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="grid place-items-center my-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="py-2 px-3 border-2 border-green-900 rounded-xl w-80"
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="ml-3 border-2 border-green-900 px-3 py-[7px] rounded-xl"
            onClick={() => {
              const data = filterData(searchInput, restaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-wrap ml-9">
        {filteredRestaurants?.length > 0 ? (
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
