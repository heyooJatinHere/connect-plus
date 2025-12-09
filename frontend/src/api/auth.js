import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change to Render URL after deployment
});

// signup
export const signupUser = (data) => API.post("/auth/signup", data);

// login
export const loginUser = (data) => API.post("/auth/login", data);
