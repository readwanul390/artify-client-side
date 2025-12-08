import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "./Layout/MainLayout";

// Pages
import Home from "./pages/Home";
import ExploreArtworks from "./pages/ExploreArtworks";
import AddArtwork from "./pages/AddArtwork";
import MyGallery from "./pages/MyGallery";
import MyFavorites from "./pages/MyFavorites";
import ArtworkDetail from "./pages/ArtworkDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ArtistProfile from "./pages/ArtistProfile";
import CategoryFilter from "./pages/CategoryFilter";

// Private route wrapper
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "explore",
        element: <ExploreArtworks />,
      },

      {
        path: "add-artwork",
        element: (
          <PrivateRoute>
            <AddArtwork />
          </PrivateRoute>
        ),
      },

      {
        path: "my-gallery",
        element: (
          <PrivateRoute>
            <MyGallery />
          </PrivateRoute>
        ),
      },

      {
        path: "my-favorites",
        element: (
          <PrivateRoute>
            <MyFavorites />
          </PrivateRoute>
        ),
      },

      
      {
        path: "artwork/:id",
        element: <ArtworkDetail />,
      },

      
      {
        path: "artist/:email",
        element: <ArtistProfile />,
      },

     
      {
        path: "categories",
        element: <CategoryFilter />,
      },

    
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
