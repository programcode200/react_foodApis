import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex}) => {
  
  // console.log("categories data", data);
  // console.log("showITEMS",showItems);
  console.log("setshowItems", setShowIndex);

  const headerClick = () => {
    console.log("jhdj callback");
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-8/12 p-4 m-auto rounded-xl my-5 shadow-lg bg-gray-200 ">
        <div onClick={headerClick} className="flex justify-between cursor-pointer">
          <h2 className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </h2>
          <i>▼</i>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
