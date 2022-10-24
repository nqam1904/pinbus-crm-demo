import { RootState } from "@/interface/ReduxState";

export const localeSelector = (state: RootState) => state.user.locale;
