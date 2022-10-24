import AuthApi from "@/api/authApi";
import { setToken } from "@/api/axiosClient";
import { LoginResult } from "@/interface/user/login";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, loginSuccess } from "../action/authenAction";
///////////log in////////////////////////
function* loginSaga(action: PayloadAction<any>) {
  try {
    const response: LoginResult = yield call(
      AuthApi.login,
      action.payload.form,
    );
    if (response?.result) {
      setToken(response?.result);
      yield put(loginSuccess(response));
      action.payload.navigate("/");
    }
  } catch (error: any) {
    console.log(error);
  } finally {
  }
}

export default function* () {
  yield takeLatest(LOGIN, loginSaga);
}
