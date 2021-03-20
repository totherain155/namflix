import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "1bf672789b8c690173890a9905ec5cbe",
        language: "en-US"
    }
})


