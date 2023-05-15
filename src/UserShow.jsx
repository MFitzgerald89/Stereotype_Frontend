import "./UserShow.scoped.scss";

export function UserShow(props) {
  return (
    <div className="user-show">
      {props.users.map(user => (
        <div key={user.id} className="user-card">
          <h1>{user.first_name}</h1>
          <p>
            {user.age}/{user.orientation}/{user.location}
          </p>
          <img src={user.photos} className="user-avatar" />
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
