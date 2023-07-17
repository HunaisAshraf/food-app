import { cloudinary_url } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  totalRatingsString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <>
      <div className="shadow-md h-64 w-64 m-4 p-3">
        <img className="w-52" src={cloudinary_url + cloudinaryImageId} alt="" />

        <h2 className="font-bold my-1">{name}</h2>
        <p className="text-xs text-gray-600">{totalRatingsString}</p>
        <p className="text-xs text-gray-600 my-1">{avgRating} ⭐</p>
        <p className="text-xs text-gray-600">{costForTwoString}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
