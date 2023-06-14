import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AuthLoginSendData,
  AuthReceiveData,
  AuthSendData,
  SignUpResponse,
} from "../../utils/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://blog-backend-vipulc8.vercel.app/api/auth`,
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation<SignUpResponse, AuthSendData>({
      query: (user) => ({
        url: `/register`,
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation<AuthReceiveData, AuthLoginSendData>({
      query: (user) => ({
        url: `/login`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useLoginUserMutation } = authApi;
