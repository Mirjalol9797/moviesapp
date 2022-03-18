import axios from "axios";

const instanc = axios.create({
   baseURL = process.env.VUE_APP_API_URL,
   params: {
      apikey: process.env.VUE_APP_API_KEY,
      plot: 'full'
   }
});

export default instanc;
