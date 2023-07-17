import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import Profile from "./components/Profile";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "contact",
            element: <Contact />
          },
        ],
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
