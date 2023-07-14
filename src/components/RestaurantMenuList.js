import RestaurantItemCards from "./RestaurantItemCards";
import NestedItemCards from "./NestedItemCards";

const RestaurantMenuList = ({ data }) => {
  const menuList = data;
  const itemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const nestedItemCategory =
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

  const menu = menuList?.map((item) => {
    if (
      item.card.card["@type"] === itemCategory ||
      item.card.card["@type"] === nestedItemCategory
    ) {
      return item.card.card;
    }
  });

  const dish = menu?.filter((item) => item !== undefined);
  console.log(dish);

  return (
    <>
      {dish?.map((item, index) => (
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
