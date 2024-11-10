
import { CDN_URL } from "../utils/constants";

const RestaurantContainer = (props) => {
  // console.log(props);

  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { slaString } = sla;

  return (
    <div className="m-3 p-2 w-56 max-w-full h-[380px] bg-gray-200 rounded-sm transform hover:scale-105 transition duration-400 shadow-xl">
      <img className="w-52 h-48 rounded-sm" src={CDN_URL + cloudinaryImageId} />

      {/* <h3 className="res">{resData.info.name}</h3>
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRating} ⭐</h5>
        <h5>{resData.info.costForTwo}</h5>
        <h5>{resData.info.sla.slaString}</h5> */}

      <h3 className="font-bold mt-2">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{costForTwo}</h5>
      <h5>{slaString}</h5>
    </div>
  );
};

//Higher Order Component 

//input => restaurant card  ==> restaurantcard openlabel

export const withOpenLabel = (RestaurantContainer) =>{
    return (props) =>{
      return (
        <div>
          <label className="absolute bg-green-600 text-white px-2 py-1 z-10 rounded-md">Open</label>
          <RestaurantContainer {...props}/>
        </div>
      )
    }
}



export default RestaurantContainer;
