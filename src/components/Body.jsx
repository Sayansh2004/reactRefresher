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
import { Link } from "react-router-dom"; // <--- 1. Import Link

export default function Body() {
  const originalList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [filteredRestaurants, setFilteredRestaurants] = useState(originalList);

  return (
    <div className="body">
      <SearchBar
        fullList={originalList}
        updateList={setFilteredRestaurants}
      />

      <div className="flex flex-wrap gap-6 p-6">
        {filteredRestaurants.map((restaurant) => (
          // 2. Wrap the Card in a Link
          // 3. Point the 'to' prop to the dynamic ID path
          <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}
            className="link-style" // Optional: removes blue underline if needed
          >
            <Card
              image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info.cloudinaryImageId}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              stars={restaurant.info.avgRating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}