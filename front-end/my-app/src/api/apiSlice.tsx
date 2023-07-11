import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Player } from '../models/Player';

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7071/api/" }),
    endpoints: (builder) => ({
        getPlayer: builder.query({
            query: (tag) => ({
                url: `Player/${encodeURIComponent(tag)}`,
                method: "GET",
            }),
        }),
    }),
})

export const { useGetPlayerQuery } = api;
