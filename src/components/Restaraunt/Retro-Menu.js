import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { useParams } from "react-router-dom";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function Menu() {
  const { id } = useParams();
  const id1 = id?.includes(":") ? id.replace(":", "") : id;

  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menu, setMenu] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const getRestaurntInfo = async () => {
    let data = await axios(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id1
    );
    setMenu(data.data.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR);
    setMenuItems(
      Object.values(
        menu?.cards[2]?.card?.card?.itemCards?.map((val) => val?.card?.info)
      )
    );
    setRestaurantInfo(data.data?.data?.cards[0]?.card?.card?.info);
  };
  useEffect(() => {
    getRestaurntInfo();
  }, []);
  return (
    <>
      <div className="menu-items">
        <div>
          <h1>restaurant id {id}</h1>
          <h2>{restaurantInfo.name}</h2>
          <h2>{restaurantInfo.areaName}</h2>
          <h2>{restaurantInfo.costForTwoMessage}</h2>
          <div>{restaurantInfo.avgRating} ☆☆</div>
        </div>
        <div>
          <h2>Menu</h2>
          <ul>
            {menuItems?.map((val, id) => (
              <li key={`menu-${id}`}>
                {val.name} -{" "}
                <button
                  onClick={() => addFoodItem(val)}
                  style={{ backgroundColor: "green", margin: "10px" }}
                >
                  Add Item
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
