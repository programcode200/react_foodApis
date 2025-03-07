import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate(); // Correctly call useNavigate here

  const dispatch = useDispatch();
  const handleclear = () => {
    dispatch(clearCart());
  };

  const handleAddItem = () => {
    navigate("/");
  };

  return (
    <div className="text-center m-4 p-2">
      <h1 className="font-bold text-lg">Cart</h1>
      <div>
        {cartItems.length == 0 && (
          <button
            className=" m-3 p-2 rounded-md text-white bg-slate-700"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        )}
        {cartItems.length > 0 && (
          <button
            className=" m-3 p-2 rounded-md text-white bg-slate-700"
            onClick={handleclear}
          >
            Clear Cart
          </button>
        )}
        <h2 className="mb-2 font-bold bg-slate-700 w-3/12 m-auto rounded-md text-white ">Cart Items- {cartItems.length}</h2>
      </div>
      <div className="border border-black rounded-md shadow-xl m-auto w-8/12">
        {cartItems.length == 0 && <h1>Cart is EMPTY! 🛒 Add your Food😋</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
