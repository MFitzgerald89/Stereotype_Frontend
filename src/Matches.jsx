export function Matches(props) {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <h1>{user.first_name}</h1>
          <p>{user.age}</p>
          <p>{user.orientation}</p>
          <p>{user.photos}</p>
        </div>
      ))}
    </div>
  );
}
