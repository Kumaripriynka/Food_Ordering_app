import { CDN_URL } from "../../utils/constants";
/* NOTE: In React if we want to use inline css we have to make a javaScript object to put styling inside it */
const styleCard = {
    background:"#f0f0f0"
    };

    const RestaurantCard = (props) => {
        const {resData } = props;
        const{cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resData?.info;
        const{deliveryTime} = resData?.info?.sla;
      
      return(
      <div className ="res_card" style = {styleCard}>
      <img className='res_logo' src ={CDN_URL + cloudinaryImageId } alt="res_logo"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>Rs. {costForTwo/100} for two</h4>
      <h4>{deliveryTime}minute</h4>
      </div>
      );
      };
    
export default RestaurantCard;