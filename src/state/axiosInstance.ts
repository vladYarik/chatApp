import axios from "axios";
import Constants from "expo-constants";
const axiosInstance = axios.create({
    baseURL:"https://api.groq.com/openai/v1/",
    timeout: 16000,
    headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${Constants.expoConfig?.extra?.apiKey}`,
    },
})

export default axiosInstance;