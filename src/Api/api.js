import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// api url
const baseUrl = "http://127.0.0.1:8000/api";

// Projects
export const Projects = createApi({
  reducerPath: "Projects",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects-api",
    }),
  }),
});

export const { useGetProjectsQuery } = Projects;
