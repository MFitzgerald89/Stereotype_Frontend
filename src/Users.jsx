export function Users(props) {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <h1>{user.first_name}</h1>
          <p>{user.age}</p>
          <p>{user.orientation}</p>
          <div>
            {user.photos.map(photo => (
              <img key={photo.id} src={photo.image} alt="User Photo" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
