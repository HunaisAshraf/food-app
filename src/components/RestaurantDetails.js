import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cloudinary_url } from "../constants";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuShimmer from "./ShimmerMenu";

const RestaurantDetails = () => {
  let { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  console.log(restaurant?.length);

  return !restaurant ? (
    <MenuShimmer />
  ) : (
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
