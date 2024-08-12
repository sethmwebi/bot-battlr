const Bot = ({ id, name, armor, avatar_url }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{armor}</p>
      <img src={avatar_url} alt="avatar" />
    </div>
  );
};

export default Bot;
