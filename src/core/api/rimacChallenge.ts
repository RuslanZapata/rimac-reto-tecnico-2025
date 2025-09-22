import axios from "axios"

const api = axios.create({
  baseURL: "https://rimac-front-end-challenge.netlify.app/api",
})

export default api