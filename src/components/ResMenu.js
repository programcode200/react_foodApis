import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo || !resInfo.cards) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log("recommended", itemCards);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return (
    <div className="menu text-center mt-0 py-4 bg-slate-300">
      <h1 className="font-serif text-slate-700 font-bold text-3xl pb-3">
        {name}
      </h1>
      <p className="font-semibold text-base">
        {cuisines.join()} - {costForTwoMessage}
      </p>

      {/* categories accordions */}

      {categories.map((category, index) => {
        //This is controlled component
        return (
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        );
      })}
    </div>
  );
};

export default ResMenu;
