import { setAllNames } from "../../reducers/nameReducer";
import { requestAllNames } from "../requests/nameRequests";
import { put, call } from "@redux-saga/core/effects";




export function* handleGetAllNames(action: any): any {
    try {
        const response = yield requestAllNames();

        yield put(setAllNames(response));

    } catch (error) {
        console.log("error");
    }
}