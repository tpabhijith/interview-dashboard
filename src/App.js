import './App.css';
import MainHeader from './components/mainHeader/MainHeader';
import Spotlight from './components/spotlight/Spotlight';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './components/contact/Contact';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './components/root/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Spotlight />,
        },
        {
          path: "contact",
          element: <Contact />,
        },

      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
