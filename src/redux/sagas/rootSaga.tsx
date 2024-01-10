
import { takeLatest, takeEvery } from "@redux-saga/core/effects";
import { handleGetAllNames } from "./handlers/nameSaga";
import { GET_ALL_NAMES } from "../reducers/nameReducer";




export function* watcherSaga() {
    yield takeEvery(GET_ALL_NAMES, handleGetAllNames);
}