import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { API_BASE } from "../api";

const AddArtwork = () => {
  const { user } = useContext(AuthContext) || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const artwork = {
      image: form.image.value,
      title: form.title.value,
      category: form.category.value,
      medium: form.medium.value,
      description: form.description.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
      userName: user?.displayName || "",
      userEmail: user?.email || "",
      artistPhoto: user?.photoURL || "",
      likes: 0,
      createdAt: new Date().toISOString(),
    };

    fetch(`${API_BASE}/artworks`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(artwork),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data._id) {
          Swal.fire("Success", "Artwork added successfully!", "success");
          form.reset();
        } else {
          Swal.fire("Error", "Failed to save artwork.", "error");
        }
      })
      .catch(() => Swal.fire("Error", "Server error", "error"));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add New Artwork</h1>
      <p className="text-gray-500 mb-6">
        Share your artwork with the Artify community.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            name="image"
            type="text"
            className="input input-bordered"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            name="title"
            type="text"
            className="input input-bordered"
            placeholder="Artwork title"
            required
          />
        </div>

        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered" required>
              <option value="">Select category</option>
              <option>Digital Art</option>
              <option>Surreal</option>
              <option>Minimal</option>
              <option>Abstract</option>
              <option>Landscape</option>
              <option>Illustration</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Medium / Tools</span>
            </label>
            <input
              name="medium"
              type="text"
              className="input input-bordered"
              placeholder="e.g. Procreate, Oil on Canvas"
              required
            />
          </div>
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            rows={4}
            placeholder="Tell us about your artwork..."
            required
          ></textarea>
        </div>

       
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Dimensions (optional)</span>
            </label>
            <input
              name="dimensions"
              type="text"
              className="input input-bordered"
              placeholder="e.g. 1920x1080px or 40x60cm"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price (optional)</span>
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              min="0"
              className="input input-bordered"
              placeholder="e.g. 50"
            />
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Visibility</span>
            </label>
            <select
              name="visibility"
              className="select select-bordered"
              defaultValue="public"
              required
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="space-y-2 text-sm text-gray-600 mt-2 md:mt-7">
            <p>
              <span className="font-semibold">User Name:</span>{" "}
              {user?.displayName}
            </p>
            <p>
              <span className="font-semibold">User Email:</span>{" "}
              {user?.email}
            </p>
          </div>
        </div>

        <button className="btn btn-primary w-full mt-4">Add Artwork</button>
      </form>
    </div>
  );
};

export default AddArtwork;
