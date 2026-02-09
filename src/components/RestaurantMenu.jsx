import { useEffect,useState } from "react";
import Card from "../shimmer/Card.jsx";

export default function RestaurantMenu(){
     const[resInfo,setResInfo]=useState(null);


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data=await fetch("https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61&lng=77.20&page_type=DESKTOP_WEB_LISTING&offset=20");

        const json=await data.json();
        console.log(json);

        setResInfo(json);
    }
    return resInfo===null?(
        <Card/>
    ):(
        <div>
        <h1>{resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1>
        </div>
    );
      
}