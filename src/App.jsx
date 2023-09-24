import { useState } from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import Product from "./components/product/Product";
import Userinfo from "./pages/userList/Userinfo";
import User from "./pages/user/User";

function App() {
  const Layout = () => {
    return (
      <div className="">
        <Topbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          {/* <RightBar /> */}
        </div>
      </div>
    );
  };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
        {
          path: "/info",
          element: <FeaturedInfo />,
        },
        {
          path: "/userinfo",
          element: <Userinfo />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/user",
          element: <User />,
        },
        // {
        //   path: "/profile/:id",
        //   element: <Profile />,
        // },
      ],
    },
    {
      path: "/info",
      element: <FeaturedInfo />,
    },
    {
      // path: "/register",
      // element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
