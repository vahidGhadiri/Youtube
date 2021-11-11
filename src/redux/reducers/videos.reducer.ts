import {InitialStateInterface, VideosActionInterface} from "../../config/interfaces.config";
import {VIDEOS} from "../../config/types.config";

const initialState: InitialStateInterface = {
    videos: [],
    isLoading: false,
    error: null
}


export const videoReducer = (state = initialState, action: VideosActionInterface): InitialStateInterface => {
    switch (action.type) {
        case VIDEOS.FETCH_VIDEOS:
            return {...state, isLoading: true}
        case VIDEOS.FETCH_VIDEOS_SUCCESSFUL:
            return {...state, videos: action.data, isLoading: false}
        case  VIDEOS.FETCH_VIDEOS_FAILURE:
            return {...state, error: action.data}
        default:
            return state
    }
}