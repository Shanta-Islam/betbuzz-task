import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      // errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        
        
      ]
    },
  ]);

  export default router;