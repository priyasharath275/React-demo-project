import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cartcards from "../Restaraunt/Cart-cards";
import { clearCart } from "../../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();
  const handleClearItem = ()=>{
    dispatch(clearCart())
  }
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Cart Item
      </h1>
      <div>
        <button
          onClick={handleClearItem}
          style={{ backgroundColor: "green", margin: "10px" }}
        >
          clear Item
        </button>
     
          {cartItems.map((val) => (
            <Cartcards {...val}></Cartcards>
          ))}
      
      </div>
    </div>
  );
}
