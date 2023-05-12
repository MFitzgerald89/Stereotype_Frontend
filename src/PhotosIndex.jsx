export function PhotosIndex(props) {
  return (
    <div>
      {props.photos.map(photo => {
        return (
          <div key={photo.id}>
            <img src={photo.image} />
          </div>
        );
      })}
    </div>
  );
}
