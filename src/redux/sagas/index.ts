import {all} from "redux-saga/effects"
import {videosSaga} from "./videos.saga";

export default function* RootSaga() {
    yield all([videosSaga()])
}