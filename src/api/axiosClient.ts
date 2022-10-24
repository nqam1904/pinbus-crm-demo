import { API_URL } from "@/utils/config";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
// import { history } from '@/routes/history';

let token: string = "";

export const setToken = (accessToken: string) => {
  token = accessToken;
};
export const getToken = () => token;

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // check internet
    // if (!InternetHelper.isConnect()) {
    // 	Promise.reject('No internet connection')
    // 	return
    // }
    if (config.headers === undefined) {
      config.headers = {
        "Content-Type": "application/json",
      };
    }
    if (token !== "") {
      config.headers.authorization = token;
    }
    console.log(config.baseURL, config.url, config.data);

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);
// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    console.info(
      JSON.stringify(response.data, null, 2),
      response.config.url,
      "response api",
    );
    return response.data;
  },
  function (error: AxiosError) {
    console.error(
      JSON.stringify(error.response?.data, null, 2),
      error.response?.config.url,
      "err res",
    );
    /* Checking if the error message is 'Network Error' and if it is, it will show a toast. */
    // if (error['message'] === 'Network Error') {
    // Toast.show({ type: 'error', text1: 'Không có kết nối Internet.' })
    // }
    return Promise.reject(error.response?.data);
  },
);
export default axiosClient;
