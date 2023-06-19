import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Home/Home";
import NotFound from "../Component/Home/NotFound";
import AddProduct from "../Component/AddProduct/AddProduct";
import UpdateProduct from "../Component/UpdateProduct/UpdateProduct";

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
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct />,
        loader: () => fetch('https://dummyjson.com/products'),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;