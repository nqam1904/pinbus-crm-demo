/** user's role */

import { Response } from "../utilities";

export interface LoginParams {
  username: string;
  loginType: number | string;
  agentCode: string;
  password: string;
  status: string;
}

export interface LoginResult extends Response {
  data: any;
}
