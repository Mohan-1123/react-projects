import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import Header from "./components/Header";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Toaster } from "react-hot-toast";

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));
const Order = lazy(() => import("./components/Order"));
const ResturantMenu = lazy(() => import("./components/ResturantMenu"));

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Toaster position="top-center" />
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/restaurant/:id",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const container = document.getElementById("root");
if (!window.__reactRoot) {
  window.__reactRoot = ReactDOM.createRoot(container);
}
window.__reactRoot.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

export default AppLayout;
