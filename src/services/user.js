import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// const addFriends

const allFriends = async (userId) => {
  try {
    const response = await api.post("/user/all-friends", { userId: userId });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const userServices = { allFriends };

export default userServices;
