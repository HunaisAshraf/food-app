import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cloudinary_url } from "../constants";
import RestaurantInfo from "./RestaurantInfo"
import RestaurantMenuList from "./RestaurantMenuList"

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const [dish, setDish] = useState();

  let { resId } = useParams();

  async function getRestaurantInfo() {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
          resId
      );
      let json = await data.json();
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
      setDish(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

      // [2]?.card?.card?.itemCards
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // console.log(dish);
  // console.log(dish[1]?.card?.card?.itemCards[2]?.card?.info);

  return (
    <>
      <RestaurantInfo data={restaurant}/>
      <RestaurantMenuList data={dish}/>
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
