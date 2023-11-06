import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { Navbar } from "./Navbar";
import { TeamNav } from "./TeamNav";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Error</h1>, // This renders a custom error page rather than the default error page with all the junk on it.
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <Store /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: "joe", element: <TeamMember name="joe" /> },
          { path: "sally", element: <TeamMember name="sally" /> },
        ],
      },
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

function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context="Hi from outlet" />
    </>
  );
}

// Router just takes a path and an element for each of the different routes we have.
