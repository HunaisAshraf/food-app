import { useState } from "react";

const RestaurantItemCards = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  //   console.log(data);

  return (
    <div className="res-itemcard">
      <div className="title-toggle">
        <h2 onClick={toggle}>{data.title}</h2>
        {isVisible ? <p>⬆️</p> : <p>⬇️</p>}
      </div>
      {isVisible && (
        <div className="">
          {data?.itemCards?.map((item) => (
            <div key={item.card.info.id}>
              <p>{item.card.info.name}</p>
              <p>₹ {item.card.info.price/100}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCards;
