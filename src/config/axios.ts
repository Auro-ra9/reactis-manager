import axios from "axios";
import toast from "react-hot-toast";

//defined base url for api calls
export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-type": "application/json" },
});

// add response interceptor with error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // error handling and toast notifications
    if (error.response) {
      toast.error(
        `Error ${error.response.status}: ${
          error.response.data.message || "Something went wrong"
        }`
      );
    } else if (error.request) {
      toast.error("No response from the server. Please check your network.");
    } else {
      toast.error("An unexpected error occurred.");
    }

    return Promise.reject(error);
  }
);
