// import { useState } from "react";


// export default function SearchBar({currentList,updateList}) {
//     const [searchedRes,setSearchedRes]=useState("")

//     const handleClick=()=>{
//       const duplicateListForSearch=currentList;
//       const matchedRestaurants=duplicateListForSearch.filter((res)=>{
//         return res.info.name.toLowerCase().includes(searchedRes.toLowerCase());

        
//       })
//       updateList(matchedRestaurants);
//     }
  
//   return (
//     <div>
//       <button className="px-1 py-3 rounded-lg text-white bg-blue-500" onClick={()=>handleClick()}>Search by Name</button>
//         <input type="text" value={searchedRes} id="resSearcher" placeholder="Tasty Yogurt........." onChange={(e)=>setSearchedRes(e.target.value)} className="focus:outline-none focus-outline-ring focus-ring-2-blue-400"/>

//         <button className="rounded-lg bg-blue-400 text-white p-2" onClick={()=>{
//             // filtering logic here 
//            const filteredList= currentList.filter((res)=>res.info.avgRating>4.5);
//           updateList(filteredList);
//         }}>Top Rated Restaurants</button>
//     </div>
//   )
// }

import { useState } from "react";

// Note: We renamed 'currentList' to 'fullList' to be clear it's the Master Copy
export default function SearchBar({ fullList, updateList }) {
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    // ALWAYS filter from the fullList (Master Copy)
    const matchedRestaurants = fullList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    
    // Update the parent's display state
    updateList(matchedRestaurants);
  };

  return (
    <div className="flex gap-4 p-4">
      <input
        type="text"
        value={searchText}
        placeholder="Search for restaurants..."
        onChange={(e) => setSearchText(e.target.value)}
        className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
      />

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={handleClick}
      >
        Search
      </button>

      {/* Fix the "Top Rated" button too! */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => {
          // Also filter from fullList here!
          const topRated = fullList.filter((res) => res.info.avgRating > 4.5);
          updateList(topRated);
        }}
      >
        Top Rated
      </button>
    </div>
  );
}
