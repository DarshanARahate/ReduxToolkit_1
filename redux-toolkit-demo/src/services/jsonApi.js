import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const jsonApi = createApi({

    reducerPath: "jsonApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),

    endpoints: (builder) => ({
        // GET USERS
        getUsers: builder.query({
            query: () => "users",
        }),

        // GET POSTS
        getPosts: builder.query({
            query: () => "posts",
        }),

        // ADD POST
        addPost: builder.mutation({
            query: (post) => ({
                url: "posts",
                method: "POST",
                body: post,
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetPostsQuery,
    useAddPostMutation
} = jsonApi;