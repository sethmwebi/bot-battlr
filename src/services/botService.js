import axios from "axios";

export const fetchBots = async () => {
  try {
    const response = await axios("http://localhost:8001/bots");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
