import axios from "axios";

const ADDRESS = "https://api.github.com";
export const addressGenerate = address => ADDRESS + address;

const http = axios.create({
  baseURL: ADDRESS,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});
http.interceptors.response.use(
  r => r,
  function(error) {
    const originalRequest = error.config;
    if (error.code === "ECONNABORTED") {
      if (!originalRequest.timedout) {
        originalRequest.timedout = 0;
      }
      if (originalRequest.timedout < 3) {
        originalRequest.timedout += 1;
        return http(originalRequest);
      } else {
        return Promise.reject({ response: { data: { timeout: true } } });
      }
    }
    return Promise.reject(error);
  }
);
export default http;
