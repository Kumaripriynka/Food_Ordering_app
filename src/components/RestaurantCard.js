import { CDN_URL } from "../../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    margin: "10px"
};

const RestaurantCard = ({ resData }) => {
    const { 
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo,
        sla 
    } = resData;

    return (
        <div className="res_card" style={styleCard}>
            <img 
                className="res_logo" 
                src={CDN_URL + cloudinaryImageId} 
                alt="restaurant logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;