import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-2">Art not found 🎭</p>
      <p className="mb-6 max-w-md">
        The page you are looking for has melted into abstract pixels. Let&apos;s
        take you back to the gallery.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
