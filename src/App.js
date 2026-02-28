import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import  "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
   {
      index: true,  
      element: <Body />
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ],
  errorElement:<Error/>
}])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)

export default AppLayout;








  





