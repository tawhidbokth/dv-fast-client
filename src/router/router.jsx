import { createBrowserRouter,} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Aouth/Login/Login";
import Register from "../Pages/Aouth/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";





export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true, 
        Component:Home
      },

      {
        path: "coverage",
        Component: Coverage
      }
    ]
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
         path: "login",
         Component: Login
      },

       {
         path: "register",
         Component: Register
      }
    ]
  }
]);