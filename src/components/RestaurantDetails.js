import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cloudinary_url } from "../constants";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
  let { resId } = useParams();

  const restaurant = useRestaurant(resId);

  console.log(restaurant);

  return (
    <>
      <RestaurantInfo data={restaurant?.resInfo} />
      <RestaurantMenuList data={restaurant?.resMenu} />
    </>
  );
};

export default RestaurantDetails;

{
  /* (
        <div className="menu" key={d?.cards?.info?.id}>
        <p>{d?.card?.info?.name}</p>
        </div>
      ) */
}
