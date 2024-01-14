import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Mainlayout from "../components/Layout/Mainlayout";
import AdminLayout from "../components/Layout/AdminLayout";
import AddedAdmin from "../components/Layout/AddedAdmin";
import AddedInstrator from "../components/Layout/AddedInstrator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <AddedAdmin></AddedAdmin>,
      },
      {
        path: "add-instra",
        element: <AddedInstrator></AddedInstrator>,
      },
    ],
  },
]);

export default router;
