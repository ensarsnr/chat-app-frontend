import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const register = async (name, surname, username, email, pass) => {
  try {
    const response = await api.post("/auth/add", {
      name: name,
      surname: surname,
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
    const response = await api.post("/auth/login", {
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
