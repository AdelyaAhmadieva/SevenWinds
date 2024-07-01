import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TreeNodeData } from '../types';

const id = localStorage.getItem("id");

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081' }),
    tagTypes: ['Nodes'],
    endpoints: (builder) => ({
        getData: builder.query<TreeNodeData[], void>({
            query: () => `/v1/outlay-rows/entity/${id}/row/list`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Nodes', id } as const)),
                        { type: 'Nodes', id: 'LIST' },
                    ]
                    : [{ type: 'Nodes', id: 'LIST' }],
        }),
        updateNode: builder.mutation<TreeNodeData, Partial<TreeNodeData>>({
            query: (node) => ({
                url: `/v1/outlay-rows/entity/${id}/row/${node.id}/update`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: node,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Nodes', id }],
        }),
        createNode: builder.mutation<TreeNodeData, Partial<TreeNodeData>>({
            query: (node) => ({
                url: `/v1/outlay-rows/entity/${id}/row/create`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: node,
            }),
            invalidatesTags: [{ type: 'Nodes', id: 'LIST' }],
        }),
        deleteNode: builder.mutation<void, number>({
            query: (nodeId) => ({
                url: `/v1/outlay-rows/entity/${id}/row/${nodeId}/delete`,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: (result, error, nodeId) => [{ type: 'Nodes', id: nodeId }],
        }),
    }),
});

export const { useGetDataQuery, useUpdateNodeMutation, useCreateNodeMutation, useDeleteNodeMutation } = api;