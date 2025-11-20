import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// pages
import HomePage from "./pages/home.jsx";
import CarsPage from "./pages/cars.jsx";
import DetailsPage from "./pages/details.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";

// routes config
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cars",
    element: <CarsPage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
