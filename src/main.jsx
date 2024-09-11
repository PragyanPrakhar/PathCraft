import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./pages/Hero.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/Create.jsx";
import Login from "./pages/Login.jsx";
import Path from "./pages/Path.jsx";
import Roadmaps from "./pages/Roadmaps.jsx";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Hero />,
    },
    {
      path:"/create",
      element:<App/>,
      children:[
        
        {
          path:"/create",
          element:<MainPage/>,
        },
        {
          path:"/create/login",
          element:<Login/>,
        },
        {
          path:"/create/path/:id",
          element:<Path/>
        },
        {
          path:"/create/roadmaps",
          element:<Roadmaps/>
        }
      ]
    }
    
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={appRouter} />
    </StrictMode>
);
