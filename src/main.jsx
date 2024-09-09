import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hero from "./pages/Hero.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
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
          
        }
      ]
    }
    
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={appRouter} />
    </StrictMode>
);
