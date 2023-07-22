import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { cloudinary_url } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/CartSlice";

const RestaurantItemCards = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(null);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const countQuantity = (item) => {
    try {
      let index = cartItems.findIndex(
        (e) => e?.card?.info?.id === item?.card?.info?.id
      );
      if (cartItems[index]?.quantity > 0) {
        let quantity = cartItems[index].quantity;
        return quantity;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-2 p-4 my-4 shadow-lg rounded">
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
          {Object.values(data?.itemCards).map((item) => {
            return (
              <div className="flex justify-between gap-14 my-4 px-2 py-4 border-b-2 ">
                <div
                  key={item.card.info.id}
                  className="flex gap-7 items-center pb-2"
                >
                  <img
                    className="h-32 rounded"
                    src={cloudinary_url + item?.card?.info?.imageId}
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-xl">{item.card.info.name}</p>
                    <p className="py-2 font-semibold">
                      ₹ {item.card.info.price / 100}
                    </p>

                    <p className="text-sm text-gray-500">
                      {item.card.info.description}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  {!cartItems.some(
                    (object) => object.card.info.id === item.card.info.id
                  )  ? (
                    <button
                      className="bg-red-500 text-white p-1 w-20 rounded"
                      onClick={() => handleAdd(item)}
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleRemove(item)}
                        className="border border-red-600 bg-red-500  text-white rounded-sm p-1 w-5"
                      >
                        -
                      </button>

                      <button className="border border-red-600 rounded-sm p-2">
                        {countQuantity(item)}
                      </button>
                      <button
                        onClick={() => handleAdd(item)}
                        className="border border-red-600 bg-red-500  text-white rounded-sm p-1"
                      >
                        +
                      </button>
                    </div>
                  )}
                  <p className="py-2">
                    {item.card.info.ratings.aggregatedRating.rating} ⭐
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCards;
