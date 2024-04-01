import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Search from "./components/menu/Search.js";
import NewsTopicPage from "./components/menu/NewsTopicPage.js";

const openNav = () => {
  document.getElementById("navbar").style.transform = "translateX(0rem)";
};
const closeNav = () => {
  document.getElementById("navbar").style.transform = "translateX(-19rem)";
};
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:<MainContent />
      },
      {
        path: "/business",
        element:<NewsTopicPage topic={'business'} />
      },
      {
        path: "/entertainment",
        element:<NewsTopicPage topic={'entertainment'} />
      },
      {
        path: "/search",
        element:<Search />
      },
      {
        path: "/sports",
        element:<NewsTopicPage topic={'sports'} />
      },
    ]
  )
  return (
    <>
      <Header openNav={openNav} closeNav={closeNav} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
