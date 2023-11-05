import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

export default function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/store":
      component = <Store />;
      break;
  }
  return component;
}
