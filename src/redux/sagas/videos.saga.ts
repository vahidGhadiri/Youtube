import {takeEvery} from "redux-saga/effects"
import {VIDEOS} from "../../config/types.config";
import {handleFetchVideos} from "../generators/videos.generator";

export function* videosSaga() {
    yield takeEvery(VIDEOS.FETCH_VIDEOS, handleFetchVideos)
}