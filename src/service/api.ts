import { apis } from "service";

import { AxiosPromise, AxiosRequestConfig } from "axios";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/auth/`;

const API_URLS = { POST_LOGIN: `${COMMON_URL}login` } as const;

export type PostLoginRequestType = Partial<{
  username: string;
  password: string;
}>;

export type PostLoginResponseType = Partial<{
  status: string;
  message: string;
  data: {
    loginRetryLimit: number;
    username: string;
    email: string;
    name: string;
    profile: string;
    role: number;
    createdAt: string;
    updatedAt: string;
    isDeleted: unknown;
    isActive: unknown;
    id: string;
    token: string;
  };
}>;

export const postLogin = (
  payload: AxiosRequestConfig<PostLoginRequestType>
): AxiosPromise<PostLoginResponseType> =>
  apis.post(API_URLS.POST_LOGIN, payload);
