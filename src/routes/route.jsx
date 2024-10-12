import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Main from "../pages/main";
import Stocks from "../pages/stock";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            index: true,
            element: <Home />
        },
        {
          path:'stock-list',
          element: <Stocks />
        },
      ]
    },
  ]);

export default  router