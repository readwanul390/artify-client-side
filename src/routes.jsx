import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "./Layout/MainLayout";
import DashboardLayout from "./Layout/DashboardLayout";

// Public Pages
import Home from "./pages/Home";
import ExploreArtworks from "./pages/ExploreArtworks";
import ArtworkDetail from "./pages/ArtworkDetail";
import ArtistProfile from "./pages/dashboard/ArtistProfile";
import CategoryFilter from "./pages/CategoryFilter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Dashboard Pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import AddArtwork from "./pages/dashboard/AddArtwork";
import MyGallery from "./pages/dashboard/MyGallery";
import MyFavorites from "./pages/dashboard/MyFavorites";


// Private Route
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Conditions from "./pages/Conditions";
import { FcContacts } from "react-icons/fc";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <ExploreArtworks /> },
      { path: "artwork/:id", element: <ArtworkDetail /> },
      { path: "artist/:email", element: <ArtistProfile /> },
      { path: "categories", element: <CategoryFilter /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "contact", element: <Contact /> }
    ],
  },

  // 🔐 DASHBOARD (ALL PRIVATE CRUD HERE)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "add-artwork", element: <AddArtwork /> },
      { path: "my-gallery", element: <MyGallery /> },
      { path: "my-favorites", element: <MyFavorites /> },
      { path: "profile", element: <ArtistProfile/> },
    ],
  },
  {
    path:'/about', element: <About />
  },
  {
    path:'/privacy', element: <Privacy />
  },
  {
    path:'/condition', element: <Conditions />
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
