import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to store using Selector hook

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // if no dependency array => useRffect is called on every component render
  // if dependency array is empty = []  => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => useEffect is called everytime when btnName is updated eg. login to logout

  useEffect(() => {
    console.log("useEffect call");
  }, []);

  return (
    <div className="flex justify-between items-center rounded-md shadow-lg m-2">
      <div className="logo-container">
        <img className="w-20" src="../assets/logo.jpg" alt="logo"/>
      </div>
      <div className="nav-items">
        <ul className="flex m-3 ">
          <li className="px-3">{onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-3 font-bold">
            <Link to={"/cart"}>🛒 - {cartItems.length}</Link>
          </li>
          <button
            className="px-3"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li className="px-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
