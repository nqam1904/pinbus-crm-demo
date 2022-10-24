import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: "light" | "dark";
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const userTheme = localStorage.getItem("theme") as ThemeState["theme"];

const initialState: ThemeState = {
  theme: userTheme || systemTheme,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<ThemeState>>) {
      Object.assign(state, action.payload);

      if (action.payload.theme) {
        const body = document.body;

        if (action.payload.theme === "dark") {
          if (!body.hasAttribute("theme-mode")) {
            body.setAttribute("theme-mode", "dark");
          }
        } else {
          if (body.hasAttribute("theme-mode")) {
            body.removeAttribute("theme-mode");
          }
        }
      }
    },
  },
});

export const { setGlobalState } = globalSlice.actions;

export default globalSlice.reducer;
