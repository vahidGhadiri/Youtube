import {call, put} from "redux-saga/effects"

import * as api from "../../api/video.api"
import {setError, setVideos} from "../actions/videos.action";

export function* handleFetchVideos(): any {
    try {
        const response = yield call(api.fetchVideos)
        yield put(setVideos(response.data))
    } catch (error) {
        yield put(setError(error))
    }
}
