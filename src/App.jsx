import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";


export default function App() {
 
  return (
    <div>

      <Header/>
      {/* if path="/" then show body */}
      {/* <Body/> */}
      {/* if path="/about" then show about component */}
      <Outlet/>
    </div>
  )
}