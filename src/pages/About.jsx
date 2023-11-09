import { useNavigate } from "react-router";
import { useEffect } from "react";

export function About() {
  const navigate = useNavigate(); //  These two lines of code will navigate the user back to the home page.

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/"); // This should only be called an an event to something such as clicking a button so we need to put this into a useEffect. This is to navigate users programmatically, or you can use the navigate function in the route.
    }, 1000);

    return () => {
      // This is the cleanup function that will run when the component is unmounted.
      clearTimeout(timeout);
    };
  }, []);
  return <h1>About</h1>;
}
