import { AuthenState } from "@/redux/reducer/authen/authenReducer";
import { ThemeState } from "@/redux/reducer/global/globalReducer";
import { UserState } from "./user/user";

export interface RootState {
  authen: AuthenState;
  user: UserState;
  global: ThemeState;
}
