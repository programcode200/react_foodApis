import RestaurantContainer, { withOpenLabel } from "./RestaurantContainer";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable 

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterNewRes, setFilterNewRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const OpenLabelRes = withOpenLabel(RestaurantContainer);

  console.log(listOfRestaurant, "body renderrrr");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4347316&lng=72.82486170000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterNewRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };






  // Conditinal rendering

  // if (listOfRestaurant.length == 0) {
  //   return  <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus !== true) {
    return <h1>It seem's your are offline!!</h1>;
  }

  if (!listOfRestaurant || listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  // Ternery operator
  return (
    <div className="body">
      <div className=" m-3 flex items-center">
        <div className="m-2">
          <input
            type="text"
            className="border-2 border-black rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="mx-2 px-3 py-1 bg-blue-700 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filterRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterNewRes(filterRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-3 py-1 bg-blue-700 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap">
        {/* <RestaurantContainer resData={resList[0]}
  
            // resObj is the prop name.
            // {resObj} is the object you're passing.
          /> */}

        {/* // when need to return value implicitly then use {} otherwise () */}

        {/* {resList.map((restaurant) => {
            return <RestaurantContainer resData={restaurant} />;
          })} */}


        {filterNewRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            {
              /* if the restaurant is open then add a open label to it */

              restaurant.info.isOpen ? (
                <OpenLabelRes resData={restaurant} />
              ) : (
                <RestaurantContainer resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
