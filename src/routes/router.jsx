import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About";
import Team from "../pages/Team";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import NotFound from "../pages/404.jsx";
import Single from "../pages/single.jsx";

// create react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <Single />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// export default router

export default router;
