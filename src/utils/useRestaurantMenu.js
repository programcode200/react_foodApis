import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();

    setResInfo(data.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
