import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://api.groq.com/openai/v1/",
    timeout: 16000,
    headers: {
        "Content-Type":"application/json",
        "Authorization":"Bearer",
    },
})

export default axiosInstance;