import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/contato",
    element: <Login />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default AppRoutes;
