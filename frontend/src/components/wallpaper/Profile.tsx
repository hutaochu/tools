const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize*1.62,
          height: user.imageSize
        }}
      />
    </div>
  );
}