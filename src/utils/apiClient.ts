import axios from "axios";

const BASE_URL = process.env["BASE_URL"]


export const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "content-type": "application/json"
    }
})