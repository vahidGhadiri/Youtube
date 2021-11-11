import * as urls from "../config/urls.config"
import {http} from "../utils/apiClient";
import {VideosListResponseInterface} from "../config/interfaces.config";


export const fetchVideos = async (): Promise<VideosListResponseInterface> => {
    return http.get(urls.VIDEOS_FETCH_VIDEOS)
}