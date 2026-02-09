// import Card from "./Card";
// import data from "../data/restauData";
// import SearchBar from "./SearchBar";
// import { useState } from "react";
// export default function Body() {
    
//     const resData=data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       const[restaurants,setRestaurants]=useState(resData)
//   return (
//     <div>
//         <div>
//  {/* searchBar */}
//  <SearchBar currentList={restaurants} updateList={setRestaurants}></SearchBar>
//         </div>

//         <div className="flex flex-wrap gap-6 p-6">
//             {/* Restuarants container */}
//            {
//            restaurants.map((restaurant)=>{
//             return(
//                 <Card key={restaurant.info.id}
//                 image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +restaurant.info.cloudinaryImageId}
//                 name={restaurant.info.name}
//               cuisines={restaurant.info.cuisines}
//               stars={restaurant.info.avgRating}
//               costForTwo={restaurant.info.costForTwo}
//                 />
//             )
//            })
//            }
            
//         </div>
       
//     </div>
//   )
// }

import { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import data from "../data/restauData"; 

export default function Body() {
  // 1. THE MASTER COPY (Never changes)
  // We can just use the import directly, or store it in a constant
  const originalList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  // 2. THE DISPLAY COPY (Changes constantly)
  const [filteredRestaurants, setFilteredRestaurants] = useState(originalList);

  return (
    <div className="body">
        {/* PASS THE MASTER COPY TO THE SEARCH BAR */}
        <SearchBar 
            // This is the full deck of cards
            fullList={originalList} 
            
            // This is the tool to update the screen
            updateList={setFilteredRestaurants} 
        />

        <div className="flex flex-wrap gap-6 p-6">
            {/* Render the FILTERED list */}
            {filteredRestaurants.map((restaurant) => (
                <Card 
                    key={restaurant.info.id} 
                    image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info.cloudinaryImageId}
                    name={restaurant.info.name}
                    cuisines={restaurant.info.cuisines}
                    stars={restaurant.info.avgRating}
                />
            ))}
        </div>
    </div>
  )
}
