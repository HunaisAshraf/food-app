import RestaurantItemCards from "./RestaurantItemCards";
import NestedItemCards from "./NestedItemCards";

const RestaurantMenuList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          {item.itemCards ? (
            <RestaurantItemCards data={item} />
          ) : (
            <NestedItemCards data={item} />
          )}
        </div>
      ))}
    </>
  );
};

export default RestaurantMenuList;
