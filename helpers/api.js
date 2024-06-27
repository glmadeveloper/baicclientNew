import axios from "axios";

const baseAPI = axios.create({
  // baseURL: "http://localhost:5001/",
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://redspark.a2hosted.com:30006/"
      : "https://redspark.a2hosted.com:30006/",
});

export default baseAPI;
