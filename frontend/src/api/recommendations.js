import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchRecommendations = (token) =>
  API.get("/recommendations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
