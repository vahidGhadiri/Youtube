import {IAction, IState} from "../../config/interfaces.config";
import {VIDEOS} from "../../config/types.config";

const initialState: IState = {
    videos: [],
    isLoading: false,
    error: null
}

export const videoReducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case VIDEOS.FETCH_VIDEOS:
            return {...state, isLoading: true}
        case VIDEOS.FETCH_VIDEOS_SUCCESSFUL:
            return {...state, videos: [...state.videos, action.data]}
        case  VIDEOS.FETCH_VIDEOS_FAILURE:
            return {...state, error: action.data}
        default:
            return state
    }
}