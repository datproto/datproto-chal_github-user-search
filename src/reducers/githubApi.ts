import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export type GithubUser = {
  name: string
  avatar_url: string
  blog?: string
  bio?: string
  twitter_username?: string
  location?: string
  followers?: number
  following?: number
  public_repos?: number
}

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
  endpoints: (builder) => ({
    getGithubUserByName: builder.query<GithubUser, string>({
      query: (username) => `${username}`
    })
  })
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const { useGetGithubUserByNameQuery } = githubApi