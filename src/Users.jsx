export function Users(props) {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <h1>{user.first_name}</h1>
          <p>{user.age}</p>
          <p>{user.orientation}</p>
          {user.photos.map(photo => (
            <div key={photo.id}>
              <img src={photo.image} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
