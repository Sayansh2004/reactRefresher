import { useState,useEffect } from "react";

const useRestaurantMenu=()=>{
     const[resInfo,setResInfo]=useState(null);


    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61&lng=77.20&restaurantId="
      + resId
        )
        const json=await data.json();
  console.log(data);
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;