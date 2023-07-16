import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState();

  async function getRestaurantInfo() {
    try {
      let data = await fetch(FETCH_MENU_URL + resId);
      let json = await data.json();

      const menuList =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const nestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      const menu = menuList?.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === nestedItemCategory
        ) {
          return item.card.card;
        }
      });

      const modifiedData = {
        resInfo: json?.data?.cards[0]?.card?.card?.info,
        resMenu: menu?.filter((item) => item !== undefined),
      };

      setRestaurant(modifiedData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return restaurant;
};

export default useRestaurant;
