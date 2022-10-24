import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Locale, UserState } from "@/interface/user/user";
import { getGlobalState } from "@/utils/getGloabal";

const initialState: UserState = {
  ...getGlobalState(),
  noticeCount: 0,
  locale: (localStorage.getItem("locale")! || "en_US") as Locale,
  newUser: JSON.parse(localStorage.getItem("newUser")!) ?? true,
  logged: localStorage.getItem("t") ? true : false,
  menuList: [],
  username: localStorage.getItem("username") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserItem(state, action: PayloadAction<Partial<UserState>>) {
      const { username } = action.payload;

      if (username !== state.username) {
        localStorage.setItem("username", action.payload.username || "");
      }

      Object.assign(state, action.payload);
    },
  },
});

export const { setUserItem } = userSlice.actions;

export default userSlice.reducer;
