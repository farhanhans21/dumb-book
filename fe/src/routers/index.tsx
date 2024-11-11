import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../auth/Layout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../components/userComponents/Product/components/Home";
import LayoutUser from "../layouts/Layout";
import HomeAdmin from "../components/adminComponents/components/HomeAdmin";
import Profile from "../components/userComponents/Profile/Profile";
// import AdminLayout from "../layouts/adminLayout";
export function AppRouter() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,

      children: [
        {
          path: "login",
          element: <Login />,
        },
        { path: "register", element: <Register /> },
      ],
    },
    {
      element: <LayoutUser />,
      children: [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "profile",
          element: <Profile/>
        }
      ],
    },
    // {
    //   element:<AdminLayout/>,
    //   children:[
    //     {
    //       path:"admin-home",
    //       element:<HomeAdmin />
    //     }
    //   ]
    // }
    
  ]);
  return <RouterProvider router={routers} />;
}
