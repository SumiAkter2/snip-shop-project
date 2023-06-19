import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Home/Home";
import NotFound from "../Component/Home/NotFound";
import AddProduct from "../Component/AddProduct/AddProduct";

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
      
    //   {
    //     path: "/checkout/:id",
    //     element: (
    //       <PrivateRoute>
    //         <CheckOut />
    //       </PrivateRoute>
    //     ),
    //     loader: ({ params }) =>
    //       fetch(
    //         `https://one-step-auto-zone-server.vercel.app/services/${params.id}`
    //       ),
    //   },
      
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;