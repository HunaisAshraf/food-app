import { useState } from "react";
import RestaurantItemCards from "./RestaurantItemCards";

const NestedItemCards = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };
console.log(data);
  return (
    <div>
      <div className="title-toggle">
        <h1 onClick={toggle}>{data.title}</h1>
        {isVisible ? <p>⬆️</p> : <p>⬇️</p>}
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
