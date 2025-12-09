import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const updateInterests = (token, interests) =>
  API.post(
    "/user/interests",
    { interests },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
