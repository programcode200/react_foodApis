import { useEffect, useState } from "react";
import mountainimg from "/food.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // if no dependency array => useRffect is called on every component render
  // if dependency array is empty = []  => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => useEffect is called everytime when btnName is updated eg. login to logout

  useEffect(() => {
    console.log("useEffect call");
  }, []);

  return (
    <div className="flex justify-between items-center shadow-lg m-2">
      <div className="logo-container">
        <img className="w-24" src={mountainimg} />
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
          <li className="px-3">Cart</li>
          <button
            className="px-3"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
