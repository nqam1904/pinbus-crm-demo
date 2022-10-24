import { RootState } from "@/interface/ReduxState";

export const authenSelector = (state: RootState) => state.authen.token;
