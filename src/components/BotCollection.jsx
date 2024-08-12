import { useEffect, useState } from "react";
import Bot from "./Bot";
import { fetchBots } from "../services/botService";
import "./BotCollection.css";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleFetchBots();
  }, []);

  const handleFetchBots = async () => {
    setLoading(true);
    const response = await fetchBots();

    if (response) {
      setBots(response);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bots">
      {bots &&
        bots.length &&
        bots.map((bot) => (
          <Bot
            key={bot.id}
            id={bot.id}
            name={bot.name}
            armor={bot.armor}
            avatar_url={bot.avatar_url}
          />
        ))}
    </div>
  );
};

export default BotCollection;
