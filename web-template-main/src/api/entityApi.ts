// services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TreeNodeData } from '../types';

const id = localStorage.getItem("id");

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081' }),
    endpoints: (builder) => ({
        getData: builder.query<TreeNodeData[], void>({
            query: () => `/v1/outlay-rows/entity/${id}/row/list`,
        }),

        updateNode: builder.mutation<TreeNodeData, Partial<TreeNodeData>>({
            query: (node) => ({
                url: `/v1/outlay-rows/entity/${id}/row/${node.id}/update`,
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: node,
            }),

        }),
    }),
});

export const { useGetDataQuery, useUpdateNodeMutation } = api;