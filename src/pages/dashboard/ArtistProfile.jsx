import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ArtistProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);

  // editable states
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [bio, setBio] = useState(
    "Provide Your artist bio here."
  );
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    try {
      setSaving(true);
      await updateUserProfile(name, photo);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Artist Profile</h1>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary"
          >
            ✏️ Edit Profile
          </button>
        )}
      </div>

      {/* ================= VIEW MODE ================= */}
      {!isEditing && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-base-100 shadow rounded-xl p-6 flex flex-col items-center">
            <div className="avatar mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-2">
                <img
                  src={
                    photo || "https://i.ibb.co/4W2DGKm/default-avatar.png"
                  }
                  alt="artist"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>

            <p className="mt-3 text-sm text-green-600 font-medium">
              Private Artist Workspace
            </p>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 bg-base-100 shadow rounded-xl p-6 space-y-4">
            <div>
              <h3 className="font-semibold">Bio</h3>
              <p className="text-gray-600 text-sm mt-1">{bio}</p>
            </div>

            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600 text-sm">
                {location || "Not specified"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Website</h3>
              <p className="text-sm text-primary">
                {website || "Not provided"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT MODE ================= */}
      {isEditing && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview */}
          <div className="bg-base-100 shadow rounded-xl p-6 flex flex-col items-center">
            <div className="avatar mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-2">
                <img
                  src={
                    photo || "https://i.ibb.co/4W2DGKm/default-avatar.png"
                  }
                  alt="artist"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500">Live Preview</p>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2 bg-base-100 shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Edit Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label font-medium">Artist Name</label>
                <input
                  className="input input-bordered w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="label font-medium">
                  Profile Image URL
                </label>
                <input
                  className="input input-bordered w-full"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>

              <div>
                <label className="label font-medium">Email</label>
                <input
                  className="input input-bordered w-full"
                  value={user?.email}
                  disabled
                />
              </div>

              <div>
                <label className="label font-medium">Location</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="e.g. Dhaka, Bangladesh"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="label font-medium">Artist Bio</label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="4"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="label font-medium">
                Website / Portfolio
              </label>
              <input
                className="input input-bordered w-full"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSave}
                className="btn btn-primary"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;
