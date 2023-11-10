import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const register = async (username, email, pass) => {
  try {
    const response = await api.post("/user/add", {
      username: username,
      email: email,
      pass: pass,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const login = async (email, pass) => {
  try {
    const response = await api.post("/user/login", {
      email: email,
      pass: pass,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const services = { register, login };

export default services;
