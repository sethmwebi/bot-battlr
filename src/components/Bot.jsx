import "./Bot.css";

const Bot = ({ id, name, avatar_url }) => {
  return (
    <div className="bot">
      <p>{id}</p>
      <p>{name}</p>
      <img className="bot-image" src={avatar_url} alt="avatar" />
    </div>
  );
};

export default Bot;
