import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [newList, setNewList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // To keep original list
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/mapi/restaurants/search/v3?lat=23.8073931&lng=86.4351775&str=restaurants%20near%20me&trackingId=68a9b928-17fa-c73e-e9b6-caff5d1bd33f&submitAction=ENTER&queryUniqueId=3cdb0128-4899-f5fc-2b17-a35a0aaf47b5");

      const json = await data.json();
      // Optional Chaining
      // Optional chaining (?.) in JavaScript is a feature that allows you to safely access nested object properties without causing errors if a property is null or undefined. It prevents runtime errors when trying to access properties of undefined or null values

      const restaurants = json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];
      setAllRestaurants(restaurants);
      setNewList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  // Shimmer UI in React ✨
// Shimmer UI is a loading skeleton effect used to enhance the user experience while content is being fetched. Instead of displaying a blank screen, it shows a placeholder UI with a shimmering effect, making the page look more responsive.

// Why Use Shimmer UI?
// ✔ Improves UX – Provides a visual cue that content is loading.
// ✔ Faster Perception of Speed – Makes the page feel faster, even if data is still loading.
// ✔ Better Than Spinners – Unlike loaders/spinners, shimmer placeholders give an idea of layout structure.

// Conditional Rendering in React 🚀
// Conditional rendering in React allows you to dynamically display components based on certain conditions (like loading state, authentication, or user input)

  // if(newList.length===0){
  //   return <Shimmer />
  // }

// It is also written using terniary operator:
  return ( newList.length===0 ? <Shimmer />:
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text" 
          className="search-box" 
          placeholder="search your restaurant or food" 
          value={searchText}
          onChange={
            (e) => {
              setSearchText(e.target.value);
            }
          }
          />
          <button className ="btn" 
          onClick={ () => {
            console.log(searchText);
           
              const filteredRestaurants = allRestaurants.filter((restaurant) =>
                restaurant?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setNewList(filteredRestaurants);
              // setSearchText(newList);
            
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4
            );
            setAllRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res_container">
        {newList?.map((restaurant) => {
          const info = restaurant?.card?.card?.info;
          if (!info) return null;

          return (
            <RestaurantCard 
              key={info.id}
              resData={info} // We're passing just the info object
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;