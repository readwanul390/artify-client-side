// src/pages/MyGallery.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { API_BASE } from "../../api";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";

const MyGallery = () => {
  const { user } = useContext(AuthContext) || {};
  const [artworks, setArtworks] = useState([]);
  const [editing, setEditing] = useState(null); 
  const [loading, setLoading] = useState(true);

  const loadMyArtworks = () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`${API_BASE}/artworks?email=${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => setArtworks(data))
      .catch(() => setArtworks([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadMyArtworks();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the artwork.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (!result.isConfirmed) return;

      fetch(`${API_BASE}/artworks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire("Deleted!", "Artwork removed.", "success");
            setArtworks((prev) => prev.filter((a) => a._id !== id));
          } else {
            Swal.fire("Error", "Failed to delete.", "error");
          }
        })
        .catch(() => Swal.fire("Error", "Server error.", "error"));
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      title: form.title.value,
      price: form.price.value,
      visibility: form.visibility.value,
    };

    fetch(`${API_BASE}/artworks/${editing._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount || data.updated) {
          Swal.fire("Updated!", "Artwork updated successfully.", "success");
          setArtworks((prev) =>
            prev.map((a) =>
              a._id === editing._id ? { ...a, ...updated } : a
            )
          );
          setEditing(null);
        } else {
          Swal.fire("Info", "No changes made.", "info");
        }
      })
      .catch(() => Swal.fire("Error", "Update failed.", "error"));
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">My Gallery</h1>
      <p className="text-gray-500">
        Artworks added by: <span className="font-semibold">{user?.email}</span>
      </p>

      {artworks.length === 0 ? (
        <p className="text-gray-400 mt-4">
          You haven&apos;t uploaded any artwork yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {artworks.map((art) => (
            <div
              key={art._id}
              className="card bg-base-100 shadow-md flex flex-col"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{art.title}</h3>
                <p className="text-sm text-gray-500">
                  {art.category} • {art.visibility?.toUpperCase()}
                </p>
                {art.price && <p>Price: ${art.price}</p>}

                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => setEditing(art)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error text-white"
                    onClick={() => handleDelete(art._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    
      {editing && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-3">Update Artwork</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={editing.title}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  defaultValue={editing.price}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Visibility</span>
                </label>
                <select
                  name="visibility"
                  defaultValue={editing.visibility || "public"}
                  className="select select-bordered"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyGallery;
