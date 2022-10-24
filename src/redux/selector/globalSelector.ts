import { RootState } from "@/interface/ReduxState";

export const themeSelector = (state: RootState) => state.global.theme;
