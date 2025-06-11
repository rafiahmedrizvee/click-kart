import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import MenProducts from "../Pages/Home/Products/MenProducts";
import WomenProducts from "../Pages/Home/Products/WomenProducts";
import ChildrenProducts from "../Pages/Home/Products/ChildrenProducts";
import AccessoriesProducts from "../Pages/Home/Products/AccessoriesProducts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/Login/SignIn";
import { productsAndCartLoader } from "../Loaders/productsAndCartLoader";
import Orders from "../Pages/Orders/Orders";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import OrderProducts from "../Pages/Dashboard/OrderProducts/OrderProducts";
import AddService from "../Pages/Dashboard/AddServices/AddService";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/men-products",
        element: <MenProducts />,
      },
      {
        path: "/women-products",
        element: <WomenProducts />,
      },
      {
        path: "/children-products",
        element: <ChildrenProducts />,
      },
      {
        path: "/accessories-products",
        element: <AccessoriesProducts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <About />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders> </Orders>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <DashboardLayout/></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element:<OrderProducts></OrderProducts>
      },
      {
        path: "/dashboard/order-products",
        element:<OrderProducts></OrderProducts>
      },
      {
        path: "/dashboard/all-users",
        element:<AllUsers></AllUsers>
      },
      {
        path: "/dashboard/add-service",
        element:<AddService></AddService>
      },
      
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
