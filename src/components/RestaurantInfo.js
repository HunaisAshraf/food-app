import { cloudinary_url } from "../constants";

const RestaurantInfo = ({ data }) => {
  return (
    <div className="flex justify-center gap-16 items-center py-7 bg-slate-800 text-white">
      <div>
        <img className="w-72 rounded brightness-90" src={cloudinary_url + data?.cloudinaryImageId} alt="" />
      </div>
      <div className="res-detail">
        <h1 className="font-bold text-2xl">{data?.name}</h1>
        <div className="flex gap-9">
        {data?.cuisines?.map(c=>(
            <p  key={c}>{c}</p>
            ))}
        </div>
        <div className="flex gap-9 mt-11">
        <p>{data?.avgRating} ⭐</p>
        <p>{data?.sla?.maxDeliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
