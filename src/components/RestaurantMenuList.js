import RestaurantItemCards from "./RestaurantItemCards";
import NestedItemCards from "./NestedItemCards";

const RestaurantMenuList = ({ data }) => {
  return (
    <div className="mx-64">
      {data?.map((item, index) => (
        <div key={index}>
          {item.itemCards ? (
            <RestaurantItemCards data={item} />
          ) : (
            <NestedItemCards data={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;
