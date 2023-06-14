import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SendPost,
  FilteredPost,
  AdminPostRequest,
  PostReceived,
  Post,
  PostFilter,
} from "../../utils/types";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://blog-backend-vipulc8.vercel.app/api/posts`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<FilteredPost, PostFilter>({
      query: (filter) =>
        `/?cat=${filter.category}&page=${filter.page}&limit=${filter.limit}&search=${filter.search}`,
      providesTags: ["Post"],
    }),

    addPosts: builder.mutation<void, SendPost>({
      query: (posts) => ({
        url: `/`,
        method: "POST",
        body: posts,
      }),
      invalidatesTags: ["Post"],
    }),

    getAdminBlogs: builder.query<PostReceived, AdminPostRequest>({
      query: (adminInfo) =>
        `/adminblog/?id=${adminInfo.id}&status=${adminInfo.status}`,
      providesTags: ["Post"],
    }),

    updateBlog: builder.mutation<void, Post>({
      query: (post) => ({
        url: `/update/${post._id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    deleteBlog: builder.mutation<void, Post>({
      query: (post) => ({
        url: `/delete/${post._id}`,
        method: "DELETE",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostsMutation,
  useGetAdminBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = postApi;
