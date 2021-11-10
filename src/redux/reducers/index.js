import {combineReducers} from "redux";
import {videoReducer} from "./videos.reducer";

export const RootReducer = combineReducers({
    videos: videoReducer
})