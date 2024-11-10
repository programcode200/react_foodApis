import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items",items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-3 m-2 text-left border-b-2 border-stone-400 flex justify-between"
        >
          <div>
            <h3 className="font-bold text-lg">{item?.card?.info?.name}</h3>
            <h6 className="font-bold mb-3">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h6>
            <p className="font-light">{item?.card?.info?.description}</p>
          </div>
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            className="w-36 h-32 ml-3 rounded-lg"
          />        
        </div>
      ))}
    </div>
  );
};

export default ItemList;
