import { useState } from "react";
import RestaurantItemCards from "./RestaurantItemCards";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const NestedItemCards = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };
  console.log(data);
  return (
    <div className="border-2 p-4 my-2 shadow-lg rounded">
      <div className="flex justify-between" onClick={toggle}>
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
        <div className="">
          {data?.categories?.map((item) => (
            <RestaurantItemCards data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedItemCards;
