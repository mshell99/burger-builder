import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-48329.firebaseio.com/",
});

export default instance;
