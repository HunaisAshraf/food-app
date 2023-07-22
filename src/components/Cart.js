import { useSelector } from "react-redux";
import { cloudinary_url } from "../constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const totalPrice = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.card.info.price;
    });
    return total/100;
  };
  

  return (
    <>
    {/* <p>price: {totalPrice()}</p> */}
      {cartItems.map((item) => (
        <div>
          <img
            className="h-32 rounded"
            src={cloudinary_url + item?.card?.info?.imageId}
            alt=""
          />
          <p className="font-bold text-xl">{item.card.info.name}</p>
          <p className="py-2 font-semibold">₹ {item.card.info.price / 100}</p>
        </div>
      ))}

      
    </>
  );
};

export default Cart;
