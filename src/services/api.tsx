import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7ffc9a0423d4ebf9bbf6091f6d7e2a34",
    language: "pt-BR",
    include_adult: false,
  },


});