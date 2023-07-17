import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine, RiStarFill } from "react-icons/ri";
import { FETCH_MENU_URL, cloudinary_url } from "../constants";

const RestaurantItemCards = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="border-2 p-2 my-4 rounded-xl">
      <div onClick={toggle} className="flex justify-between ">
        <h1 className="font-bold text-xl">{data.title}</h1>
        {isVisible ? (
          <p className="text-2xl">
            <RiArrowUpSLine />
          </p>
        ) : (
          <p className="text-2xl">
            <RiArrowDownSLine />
          </p>
        )}
      </div>
      {isVisible && (
        <div className="mt-4">
          {data?.itemCards?.map((item) => (
            <div
              key={item.card.info.id}
              className="flex gap-7 items-center border-b-2 my-4 px-2 py-4"
            >
              <img
                className="h-32 rounded"
                src={cloudinary_url + item?.card?.info?.imageId}
                alt=""
              />
              <div>
                <p className="font-bold text-xl">{item.card.info.name}</p>
                <p className="py-2 font-semibold">₹ {item.card.info.price / 100}</p>
                <p className="py-2">
                  {item.card.info.ratings.aggregatedRating.rating} ⭐
                </p>
                <p className="text-sm text-gray-500">{item.card.info.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCards;
