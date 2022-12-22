/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e90a847eb4msh6392992c90fdceap1197a8jsn0d05b60b13df');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;