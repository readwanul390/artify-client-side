// src/pages/Register.jsx
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const minLength = password.length >= 6;

    if (!hasUpper || !hasLower || !minLength) {
      Swal.fire(
        "Invalid password",
        "Password must contain uppercase, lowercase and at least 6 characters.",
        "warning"
      );
      return;
    }

    registerUser(email, password)
      .then(() => {
        return updateUserProfile(name, photoURL);
      })
      .then(() => {
        Swal.fire("Success", "Registration successful!", "success");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Success", "Signed up with Google!", "success");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-md">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="card-title justify-center mb-2">Register</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://..."
              className="input input-bordered"
            />
          </div>

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
              autoComplete="new-password"
            />
            <label className="label">
              <span className="label-text-alt text-xs">
                Must contain uppercase, lowercase and 6+ characters.
              </span>
            </label>
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-primary">Register</button>
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
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
