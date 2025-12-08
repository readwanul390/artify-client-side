// src/pages/Login.jsx
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        Swal.fire("Success", "Login successful!", "success");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Success", "Logged in with Google!", "success");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-md">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="card-title justify-center mb-2">Login</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-primary">Login</button>
          </div>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogle}
            className="btn btn-outline"
          >
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            New to Artify?{" "}
            <Link to="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
