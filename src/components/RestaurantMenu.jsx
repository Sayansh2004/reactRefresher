
import Card from "../shimmer/Card.jsx";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
export default function RestaurantMenu(){
    
  const onlineStatus=useOnlineStatus();
  if(!onlineStatus){
    return <h1>Looks you are offline, check your internet connection</h1>
  }
     const params=useParams();

     const{resId}=params;
     console.log(resId);
 const resInfo=useRestaurantMenu(resId);


    if (resInfo === null) {
    return <Card />;
  }
 
    const {name,cloudinaryImageId,avgRating,cuisines}=resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
    

    
    
   return (
   <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
  
  <img
    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
    alt={name}
    className="w-full h-40 object-cover"
  />

  <div className="p-4">
    <h1 className="text-lg font-semibold">{name}</h1>
    <h3 className="text-sm text-gray-600">
      {cuisines.join(", ")} • {avgRating} stars
    </h3>
  </div>

</div>

  );
      
}