import * as urls from "../config/urls.config"

import {http} from "../utils/apiClient";
import {VideosListResponseInterface} from "../config/interfaces.config";


export const fetchVideos = async (): Promise<VideosListResponseInterface> => http.get(urls.VIDEOS_FETCH_VIDEOS)
