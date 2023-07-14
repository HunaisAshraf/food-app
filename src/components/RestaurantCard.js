import { cloudinary_url } from "../constants";
const RestaurantCard = ({ name, cloudinaryImageId, cuisines }) => {
  return (
    <div className="restaurant-card">
      <div className="card">
        <img src={cloudinary_url + cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        {/* <h5>{rating} Stars</h5> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
