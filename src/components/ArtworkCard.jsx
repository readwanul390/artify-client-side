// src/components/ArtworkCard.jsx
import { Link } from "react-router-dom";

const ArtworkCard = ({ artwork }) => {
  const {
    _id,
    image,
    title,
    category,
    userName,
    userEmail,
    price,
    likes = 0,
  } = artwork;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg">{title}</h3>
        <p className="text-xs text-gray-500">
          {category} • by{" "}
          <Link
            to={`/artist/${encodeURIComponent(userEmail)}`}
            className="link link-hover"
          >
            {userName}
          </Link>
        </p>
        {price && <p className="text-sm">Price: ${price}</p>}

        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>❤️ {likes} likes</span>
          <Link to={`/artwork/${_id}`} className="btn btn-xs btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
