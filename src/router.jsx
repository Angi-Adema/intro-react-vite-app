import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <Store /> },
      { path: "/team", element: <Team /> },
      { path: "/team/joe", element: <TeamMember name="joe" /> },
      { path: "/team/sally", element: <TeamMember name="sally" /> },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// Router just takes a path and an element for each of the different routes we have.
