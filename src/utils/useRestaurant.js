import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useRestaurant = () => {
  const [restaurants, setRestaurant] = useState([]);

  async function getRestaurant() {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(restaurants);

  useEffect(() => {
    getRestaurant();
  }, []);

  return restaurants;
};

export default useRestaurant;
