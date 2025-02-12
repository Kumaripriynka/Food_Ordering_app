import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body = () => {
  const [newList, setNewList] = useState(resList); // Initialize with resList

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.info.avgRating < 4); // Filter properly
            setNewList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res_container">
        {newList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
