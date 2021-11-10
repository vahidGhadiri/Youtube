import {call, put} from "redux-saga/effects"
import * as api from "../../api/video.api"
import {setError, setVideos} from "../actions/videos.action";

export function* handleFetchVideos() {
    try {
        // @ts-ignore
        const response = yield call(api.fetchVideos)
        yield put(setVideos(response))
    } catch (e: any) {
        const error = e.message
        put(setError(error))
    }
}