import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { lazy,Suspense } from 'react';
import './index.css'
import App from './App.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Card from './shimmer/Card.jsx';

const Groceries=lazy(()=>import("./components/Groceries.jsx"));

const appRouter=createBrowserRouter([
  {
    path:"/",
     element:<App />,
    children:[
      {
        path:"/",
        element:<Body />
      },
     {

    path:"/about",
    element:<About/>
     },
     {
    path:"/contact",
    element:<Contact />
    },
    {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
    },
    {
      path:"/groceries",
      element:<Suspense fallback={<Card/>}><Groceries/></Suspense>
    }
    ],
    errorElement:<Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter} />
  </StrictMode>,
)
