import {
  createBrowserRouter,
  Outlet,
  Navigate,
  redirect,
  useNavigation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { Navbar } from "./Navbar";
import { TeamNav } from "./TeamNav";
import { NewTeamMember } from "./pages/NewTeamMember";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Error</h1>, // This renders a custom error page rather than the default error page with all the junk on it.
    children: [
      { path: "*", element: <Navigate to="/" /> }, //  This will reroute the user to a 404 page through <h1>404</h1> or to any other page you choose such as the home page. This is used to force naviation for some specific thing, otherwise you can do it programmatically as seen in the About page.
      { path: "/", element: <Home /> },
      { path: "/test/*", element: <h1>Test</h1> }, // This is a wild card route where anything that is typed in after the /test/ in the URL will render no matter what is typed in.
      { path: "/about", element: <About /> }, // Changed the path from a specific person's name to a dynamic route that will take any name.
      { path: "/store", element: <Store /> },
      {
        path: "/team",
        element: <TeamNavLayout />,

        // The loader will load the data for us without having to use any useEffects, etc. Cleans up the code.
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users?_limit=2", {
            // Can limit only 2 results or leave it as is to get all the results.
            signal,
          });
        },
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}, { signal }`
              ).then((res) => {
                if (res.status === 200) return res.json();

                return redirect("/team"); // If the user searches for a team member that does not exist, this just routes them back to the team page.
              });
            },
            element: <TeamMember />,
          },
          { path: "new", element: <NewTeamMember /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  state === "loading" ? <h1>Loading...</h1> : <Outlet />;

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
