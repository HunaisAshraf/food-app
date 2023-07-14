import { cloudinary_url } from "../constants";

const RestaurantInfo = ({ data }) => {
  return (
    <div className="res-info">
      <div className="res-img">
        <img src={cloudinary_url + data?.cloudinaryImageId} alt="" />
      </div>
      <div className="res-detail">
        <h1>{data?.name}</h1>
        <div className="cuisine">
        {data?.cuisines?.map(c=>(
            <p key={c}>{c}</p>
            ))}
        </div>
        <div className="delivery">
        <p>{data?.avgRating} ⭐</p>
        <p>{data?.sla?.maxDeliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
