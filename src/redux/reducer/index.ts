import { combineReducers } from "@reduxjs/toolkit";
import { authenReducer } from "./authen/authenReducer";
import globalReducer from "./global/globalReducer";
import tagsViewReducer from "./tags/tagsViewReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  authen: authenReducer,
  tagsView: tagsViewReducer,
  user: userReducer,
  global: globalReducer,
});
export { rootReducer };
