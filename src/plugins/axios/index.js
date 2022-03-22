import axios from "axios";
import interceptors from "./interceptors";

const instanc = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

interceptors(instanc);

export default instanc;
