import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const addFriend = async (userId, username) => {
  try {
    const response = await api.post(`/user/add-friends/${userId}`, {
      username: [username],
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const friendService = { addFriend };

export default friendService;
