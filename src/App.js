import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import  "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
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
    }
  ],
  errorElement:<Error/>
}])

const container = document.getElementById("root");
if (!window.__reactRoot) {
  window.__reactRoot = ReactDOM.createRoot(container);
}
window.__reactRoot.render(<RouterProvider router={router}/>);

export default AppLayout;








  





