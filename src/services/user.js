import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getName = async (userId) => {
  try {
    const response = await api.post("/user/get-name", { userId: userId });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const allFriends = async (userId) => {
  try {
    const response = await api.get(`/user/all-friends/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userServices = { allFriends, getName };

export default userServices;
