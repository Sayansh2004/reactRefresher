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


//code splitting or lazy loading
// we do chunking i.e. not sending whole .js file at once we will make different bundles and then send those bundles 
// as using a single .js file will make the loading of component very much slower
// so by usng bundling we crete separate bundles and only that .js file is sent which is requested a tthat time
//lazy(()=>import('path'))
//{
//  path:<Suspense fallback={fbComponent}>actual component</Suspense>
//}