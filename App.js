import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* Rough sketch of app
*Header
- logo
- Nav Items

*Body
- Search
- RestaurantContainer
   -restaurantcard
     - Img
     - Name of Restaurant, Star Ratings,quizine etc.

*Footer
- Copyright
-links
-address
-contact


*/

/* NOTE: In React if we want to use inline css we have to make a javaScript object to put styling inside it */
const styleCard = {
    background:"#f0f0f0"
    }

const Header = () => {
    return(
        <div className = "header_container">

        <div className ="logo_container">
        <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?semt=ais_incoming" />
        </div>

        <div className ="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>
         </ul>
        </div>

        </div>
    );
};

const resList = [{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "300308",
    "name": "Kaveri's Restaurant",
    "city": "99",
    "slugs": {
      "restaurant": "kaveri’s-restaurant-bank-more-bank-more",
      "city": "dhanbad"
    },
    "cloudinaryImageId": "hawe8breczghxnwwwmwa",
    "address": "1st Floor, Rajhans Mansion, Bank More, Dhanbad, Jharkhand 826001",
    "locality": "Bank More",
    "areaName": "Dhanbad Locality",
    "costForTwo": "40000",
    "costForTwoMessage": "₹400 FOR TWO",
    "cuisines": [
      "Biryani",
      "North Indian",
      "Chinese",
      "Kebabs",
      "Indian"
    ],
    "avgRating": 4.3,
    "feeDetails": {
      
    },
    "avgRatingString": "4.3",
    "totalRatingsString": "5.8K+",
    "sla": {
      "deliveryTime": 33,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 35,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "30-35 MINS",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "opened": true,
      "restaurantClosedMeta": {
        
      }
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Chinese.png",
          "description": "Delivery!"
        },
        {
          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
          "description": "Delivery!"
        }
      ]
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {
        
      },
      "presentation": {
        
      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    }
  },
  "analytics": {
    "screenName": "explore",
    "context": "{\"tid\":\"34a827f7-860a-f8a6-9de8-85b4c6ab9011\",\"grid\":\"f51a03b9-e004-46a8-9181-d27cdf1a4b7d\",\"queryUniqueId\":\"21fa5141-e4fd-c8e1-62eb-024670bdd0c9\",\"query\":\"Kaveri's Restaurant\"}",
    "objectValue": "300308",
    "impressionObjectName": "impression-restaurant",
    "clickObjectName": "click-restaurant"
  },
  "ctaWithParams": {
    "link": "swiggy://menu",
    "type": "DEEPLINK",
    "params": {
      "isSld": "false",
      "sourceRequestId": "67ca3444bd54032f062fd75fda2799c3",
      "restaurant_id": "300308",
      "query": "Kaveri's Restaurant",
      "sourceSessionId": "iuz131e2-1f29-47ae-886f-b8a471b69881",
      "source": "SEARCH"
    }
  }
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "717990",
    "name": "Burger King",
    "city": "99",
    "slugs": {
      "restaurant": "burger-king-saraidhela-sardar-patel-nagar",
      "city": "dhanbad"
    },
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_717990.JPG",
    "address": "SHOP NO 3 & 3A UGF MAIN ROAD, SARAIDHELA,BESIDE BHARAT PETROL PUMP, DHANBAD[1]JHARKHAND-828127",
    "locality": "Saraidhela",
    "areaName": "Dhanbad",
    "costForTwo": "35000",
    "costForTwoMessage": "₹350 FOR TWO",
    "cuisines": [
      "Burgers",
      "American"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      
    },
    "avgRatingString": "4.4",
    "totalRatingsString": "3.0K+",
    "sla": {
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 25,
      "lastMileTravel": 2.7,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "20-25 MINS",
      "lastMileTravelString": "2.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "opened": true,
      "restaurantClosedMeta": {
        
      }
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {
        
      },
      "presentation": {
        
      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    }
  },
  "analytics": {
    "screenName": "explore",
    "context": "{\"tid\":\"c70e4c57-6315-b34e-3b10-e1e3cb918a17\",\"grid\":\"aa458c06-0560-4485-92d3-af17524fd0dd\",\"queryUniqueId\":\"6cc329e9-7cbb-740a-a8f6-5421bb16c05b\",\"query\":\"restauarents near me\"}",
    "objectValue": "717990",
    "impressionObjectName": "impression-restaurant",
    "clickObjectName": "click-restaurant"
  },
  "ctaWithParams": {
    "link": "swiggy://menu",
    "type": "DEEPLINK",
    "params": {
      "isSld": "false",
      "sourceRequestId": "af988c99665eec34797646c0de678834",
      "restaurant_id": "717990",
      "query": "restauarents near me",
      "sourceSessionId": "iv95106d-6d7b-4847-8055-7af9c77da5c2",
      "source": "SEARCH"
    }
  }
},
 {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "735385",
    "name": "Ramavtars Marwadi tiffins",
    "city": "99",
    "slugs": {
      "restaurant": "ramavtars-marwadi-tiffins-sardar-patel-nagar-sardar-patel-nagar",
      "city": "dhanbad"
    },
    "cloudinaryImageId": "2eda496baa5749a6f406b74e61f07b09",
    "address": "QCQW+PFQ, Khatal Rd, Binod Nagar, Dhanbad, Jharkhand 826001, India",
    "locality": "Binod Nagar",
    "areaName": "Sardar Patel Nagar",
    "costForTwo": "20000",
    "costForTwoMessage": "₹200 FOR TWO",
    "cuisines": [
      "Home Food",
      "Indian",
      "North Indian",
      "Rajasthani",
      "Thalis"
    ],
    "avgRating": 4.1,
    "feeDetails": {
      
    },
    "avgRatingString": "4.1",
    "totalRatingsString": "211",
    "promoted": true,
    "adTrackingId": "cid=24722831~p=1~adgrpid=24722831#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=735385~st=restauarents near me~eid=6e68cefb-7006-477c-88ba-95901acdfa24~srvts=1739206518053",
    "sla": {
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 40,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "35-40 MINS",
      "lastMileTravelString": "2.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "opened": true,
      "restaurantClosedMeta": {
        
      }
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {
        
      },
      "presentation": {
        
      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    },
    "campaignId": "24722831"
  },
  "analytics": {
    "screenName": "explore",
    "context": "{\"tid\":\"c70e4c57-6315-b34e-3b10-e1e3cb918a17\",\"grid\":\"aa458c06-0560-4485-92d3-af17524fd0dd\",\"queryUniqueId\":\"6cc329e9-7cbb-740a-a8f6-5421bb16c05b\",\"query\":\"restauarents near me\",\"adTrackingId\":\"cid=24722831~p=1~adgrpid=24722831#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=735385~st=restauarents near me~eid=6e68cefb-7006-477c-88ba-95901acdfa24~srvts=1739206518053\"}",
    "objectValue": "735385",
    "impressionObjectName": "impression-restaurant-ad",
    "clickObjectName": "click-restaurant-ad"
  },
  "ctaWithParams": {
    "link": "swiggy://menu",
    "type": "DEEPLINK",
    "params": {
      "restaurant_id": "735385",
      "query": "restauarents near me",
      "sourceSessionId": "iv95106d-6d7b-4847-8055-7af9c77da5c2",
      "source": "SEARCH",
      "isSld": "false",
      "sourceRequestId": "af988c99665eec34797646c0de678834"
    }
  }
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "714182",
    "name": "Saffron - Hotel The Venue",
    "city": "99",
    "slugs": {
      "restaurant": "saffron---hotel-the-venue-sardar-patel-nagar-sardar-patel-nagar",
      "city": "dhanbad"
    },
    "cloudinaryImageId": "b6e9d96c43c3bc4c6e3c37ff6d814125",
    "address": "Saffron, Hotel The Venue, Dhanbad,  Dhanbad Urban, Dhanbad, Jharkhand -  826001",
    "locality": "Hotel The Venue",
    "areaName": "Sardar Patel Nagar",
    "costForTwo": "50000",
    "costForTwoMessage": "₹500 FOR TWO",
    "cuisines": [
      "Indian",
      "Chinese",
      "Continental",
      "Italian",
      "Biryani",
      "Tandoor"
    ],
    "avgRating": 4.4,
    "feeDetails": {
      
    },
    "avgRatingString": "4.4",
    "totalRatingsString": "1.0K+",
    "sla": {
      "deliveryTime": 21,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 25,
      "lastMileTravel": 0.4,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "20-25 MINS",
      "lastMileTravelString": "0.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseMessage": "Closes soon",
      "opened": true,
      "restaurantClosedMeta": {
        
      }
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
          "description": "bolt!"
        }
      ]
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹100 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {
        
      },
      "presentation": {
        
      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    }
  },
  "analytics": {
    "screenName": "explore",
    "context": "{\"tid\":\"c70e4c57-6315-b34e-3b10-e1e3cb918a17\",\"grid\":\"aa458c06-0560-4485-92d3-af17524fd0dd\",\"queryUniqueId\":\"6cc329e9-7cbb-740a-a8f6-5421bb16c05b\",\"query\":\"restauarents near me\"}",
    "objectValue": "714182",
    "impressionObjectName": "impression-restaurant",
    "clickObjectName": "click-restaurant"
  },
  "ctaWithParams": {
    "link": "swiggy://menu",
    "type": "DEEPLINK",
    "params": {
      "restaurant_id": "714182",
      "query": "restauarents near me",
      "sourceSessionId": "iv95106d-6d7b-4847-8055-7af9c77da5c2",
      "source": "SEARCH",
      "isSld": "false",
      "sourceRequestId": "af988c99665eec34797646c0de678834"
    }
  }
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "790923",
    "name": "Dice N Dine",
    "city": "99",
    "slugs": {
      "restaurant": "dice-n-dine-sardar-patel-nagar-sardar-patel-nagar",
      "city": "dhanbad"
    },
    "cloudinaryImageId": "16400d2141cb4bc16ac6b79edfb89298",
    "address": "J.C. Mallick Road, Hirapur, RC2V+QQH, Baba Colony, Hirapur, CMPF Colony, Dhanbad, Jharkhand 826001, India",
    "locality": "Dhanbad",
    "areaName": "Sardar Patel Nagar",
    "costForTwo": "35000",
    "costForTwoMessage": "₹350 FOR TWO",
    "cuisines": [
      "Chinese",
      "Seafood",
      "Tandoor",
      "Kebabs",
      "Biryani",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
      
    },
    "avgRatingString": "4.2",
    "totalRatingsString": "82",
    "promoted": true,
    "adTrackingId": "cid=24927210~p=2~adgrpid=24927210#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790923~st=restauarents near me~eid=6c2d15ff-ba88-4495-b1e9-5fafc554b885~srvts=1739206518053",
    "sla": {
      "deliveryTime": 26,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 30,
      "lastMileTravel": 1.6,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "25-30 MINS",
      "lastMileTravelString": "1.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseMessage": "Closes soon",
      "opened": true,
      "restaurantClosedMeta": {
        
      }
    },
    "badges": {
      
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {
        
      },
      "presentation": {
        
      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    },
    "campaignId": "24927210"
  },
  "analytics": {
    "screenName": "explore",
    "context": "{\"tid\":\"c70e4c57-6315-b34e-3b10-e1e3cb918a17\",\"grid\":\"aa458c06-0560-4485-92d3-af17524fd0dd\",\"queryUniqueId\":\"6cc329e9-7cbb-740a-a8f6-5421bb16c05b\",\"query\":\"restauarents near me\",\"adTrackingId\":\"cid=24927210~p=2~adgrpid=24927210#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790923~st=restauarents near me~eid=6c2d15ff-ba88-4495-b1e9-5fafc554b885~srvts=1739206518053\"}",
    "objectValue": "790923",
    "impressionObjectName": "impression-restaurant-ad",
    "clickObjectName": "click-restaurant-ad"
  },
  "ctaWithParams": {
    "link": "swiggy://menu",
    "type": "DEEPLINK",
    "params": {
      "restaurant_id": "790923",
      "query": "restauarents near me",
      "sourceSessionId": "iv95106d-6d7b-4847-8055-7af9c77da5c2",
      "source": "SEARCH",
      "isSld": "false",
      "sourceRequestId": "af988c99665eec34797646c0de678834"
    }
  }
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "93885",
    "name": "Aroti Restaurant",
    "city": "99",
    "slugs": {
      "restaurant": "aroti-restaurant-hirapur-sardar-patel-nagar",
      "city": "dhanbad"
    },
    "cloudinaryImageId": "xg8wswywwedan7ebmavf",
    "address": "1st, Hira Palace, Hatia road, Hirapur, Park market, Dhanbad, Jharkhand 826001, India",
    "locality": "Hirapur",
    "areaName": "Hirapur",
    "costForTwo": "40000",
    "costForTwoMessage": "₹400 FOR TWO",
    "cuisines": [
      "Indian",
      "Chinese",
      "Tandoor",
      "Snacks",
      "North Indian",
      "Italian"
    ],
    "avgRating": 4.3,
    "feeDetails": {
      
    },
    "avgRatingString": "4.3",
    "totalRatingsString": "19K+",
    "sla": {
      "deliveryTime": 27,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 30,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "rainMode": "RAIN_MODE_NONE",
      "slaString": "25-30 MINS",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "opened": true,
      "restaurantClosedMeta": {
        
      }
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
          "description": "bolt!"
        },
        {
          "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
          "description": "Delivery!"
        }
      ]
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
      },
      "freedelMessage": "FREE DELIVERY"
    },
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "cartOrderabilityNudgeBanner": {
      "parameters": {
        
      },
      "presentation": {
        
      }
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "featuredSectionInfo": {
      "sectionTitle": "More"
    }
  },
  "analytics": {
    "screenName": "explore",
    "context": "{\"tid\":\"c70e4c57-6315-b34e-3b10-e1e3cb918a17\",\"grid\":\"aa458c06-0560-4485-92d3-af17524fd0dd\",\"queryUniqueId\":\"6cc329e9-7cbb-740a-a8f6-5421bb16c05b\",\"query\":\"restauarents near me\"}",
    "objectValue": "93885",
    "impressionObjectName": "impression-restaurant",
    "clickObjectName": "click-restaurant"
  },
  "ctaWithParams": {
    "link": "swiggy://menu",
    "type": "DEEPLINK",
    "params": {
      "sourceSessionId": "iv95106d-6d7b-4847-8055-7af9c77da5c2",
      "source": "SEARCH",
      "isSld": "false",
      "sourceRequestId": "af988c99665eec34797646c0de678834",
      "restaurant_id": "93885",
      "query": "restauarents near me"
    }
  }
}
];




const RestaurantCard = (props) => {
  const {resData } = props;
  const{cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resData?.info;
  const{deliveryTime} = resData?.info?.sla;

return(
<div className ="res_card" style = {styleCard}>
<img className='res_logo' src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/"+ cloudinaryImageId } alt="res_logo"/>
<h3>{name}</h3>
<h4>{cuisines.join(",")}</h4>
<h4>{avgRating}stars</h4>
<h4>Rs. {costForTwo/100} for two</h4>
<h4>{deliveryTime}minute</h4>
</div>
);
};


// Here we have same name of food card with same data in RestaurantCard, how we can dynamically change the data of the ReactComponent,so here the concept of props are coming. We can undestand this as a just normal  javascript arguments passing trough a function. i.e props (short for "properties") are like inputs we give to a React component to customize it. They allow you to pass data from a parent component to a child component.

// **** Props is an Object
const Body = () => {
    return(
        <div className ="body">
            <div className = "search">Search</div>
            <div className = "res_container">
                {/* < RestaurantCard resData={resList[0]}/>
                < RestaurantCard resData={resList[1]}/>
                < RestaurantCard resData={resList[2]}/>
                < RestaurantCard resData={resList[3]}/>
                < RestaurantCard resData={resList[4]}/>
                < RestaurantCard resData={resList[5]}/>
                */}


                {/* ###### NOTE : Above code is okay for small data like 10 to 20 but in case of big data, we make it by usig map function for better code like below */}
          {
            resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)
          }
            </div>
        </div>
    );
};

// Today's Learning : So when we want  dynamically passing few data to a component, we can pass it through the props, and we can pass any number of props we wish to.


const AppLayout = () => {
   return (
    <div className="app">
     <Header />
     <Body />
    </div>
   );
};

root.render(<AppLayout />)

// Config Driven Ui: Controling the Ui using given data or given config is known as the config Driven UI,and config comes from the Backend.

// Our website is driven by the data ,that is known as config driven ui.





