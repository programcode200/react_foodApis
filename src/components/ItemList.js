import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    //Dispatch an action
    dispatch(addItem("pizza"))
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-3 m-2 text-left border-b-2 border-stone-400 flex justify-between"
        >
          <div className="w-9/12">
            <h3 className="font-bold text-lg">{item?.card?.info?.name}</h3>
            <h6 className="font-bold mb-3">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h6>
            <p className="font-light">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-36 h-32 ml-7 rounded-lg"
            />
            <div className="absolute -top-4 w-full flex justify-center">
              <button
                className="w-16 h-8 text-white bg-green-600 rounded-md"
                onClick={handleAddItem}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
