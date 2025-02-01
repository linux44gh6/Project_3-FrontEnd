import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `${token}`);
      }
      return headers;
    },
  });

  const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery,
    endpoints:()=>({})
  })

  export default baseApi