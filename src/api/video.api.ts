import * as urls from "../config/urls.config"
import {http} from "../utils/apiClient";

export const fetchVideos = () => {
    return new Promise((resolve, reject) => {
        http.get(urls.VIDEOS_FETCH_VIDEOS)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}