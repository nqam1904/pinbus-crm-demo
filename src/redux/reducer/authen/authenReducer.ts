import { LOGIN_SUCCESS } from "@/redux/action/authenAction";
import { AnyAction } from "@reduxjs/toolkit";

export interface AuthenState {
  token: string;
}

const initialState: AuthenState = {
  token: "",
};

export const authenReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
