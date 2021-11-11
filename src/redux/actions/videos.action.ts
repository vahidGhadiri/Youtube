import * as types from "../../config/types.config"


export const fetchVideos = () => ({type: types.VIDEOS.FETCH_VIDEOS})

export const setVideos = (videos: Array<object>) => ({type: types.VIDEOS.FETCH_VIDEOS_SUCCESSFUL, data: videos})

export const setError = (error: any) => ({type: types.VIDEOS.FETCH_VIDEOS_FAILURE, action: error})