import "./UserShow.scoped.scss";
import { useState } from "react";

export function UserShow(props) {
  const [likeCounts, setLikeCounts] = useState({});

  const handleLike = userId => {
    setLikeCounts(prevLikeCounts => {
      const prevLikeCount = prevLikeCounts[userId] || 0;
      const updatedLikeCount = prevLikeCount + (prevLikeCount === 0 ? 1 : -1);
      return { ...prevLikeCounts, [userId]: updatedLikeCount };
    });
  };

  return (
    <div className="user-show">
      {props.users.map(user => (
        <div key={user.id} className="user-card">
          <h1>{user.first_name}</h1>
          <p>
            {user.gender}/{user.age}/{user.orientation}/{user.location}
          </p>
          <img src={user.photos} className="user-avatar" />
          <button className="like-button" onClick={() => handleLike(user.id)}>
            {likeCounts[user.id] ? "Unlike" : "Like"}
          </button>
          <span>
            {likeCounts[user.id] || 0} {likeCounts[user.id] === 1 ? "likes" : "like"}
          </span>
          {user.genres.map(genre => (
            <div key={genre.id} className="genres">
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
