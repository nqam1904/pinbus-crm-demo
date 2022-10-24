import { LoginParams } from "@/interface/user/login";
import axiosClient from "./axiosClient";

const AuthApi = {
  login(data: LoginParams) {
    const url = "/login";
    const body: any = {
      agentCode: "",
      loginType: "11",
      status: "00601",
      password: data.password,
      username: data.username,
    };
    return axiosClient.post(url, body);
  },
};
export default AuthApi;
