import { LoginParams, LoginResult } from "@/interface/user/login";
import { createAction } from "@reduxjs/toolkit";

//*************LOGIN*************** */
export const LOGIN = "LOGIN";
export const loginAction = createAction<any>(LOGIN);

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = createAction<LoginResult>(LOGIN_SUCCESS);

//**************************** */
export const LOG_OUT = "LOG_OUT";
export const logOutAction = createAction(LOG_OUT);
