import { useEffect,useState } from "react";
import Card from "../shimmer/Card.jsx";
import { useParams } from "react-router-dom";

export default function RestaurantMenu(){
     const[resInfo,setResInfo]=useState(null);
     const params=useParams();

     const{resId}=params;
     console.log(resId);


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9716&lng=77.5946&restaurantId=" + resId
    );
        const json=await data.json();
        console.log(json);

        setResInfo(json);
    }

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