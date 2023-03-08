'use client'

import React                         from 'react'
import Header                        from '@/components/molecules/Header'
import Search                        from '@/components/molecules/Search'
import {useGetGithubUserByNameQuery} from '@/reducers/githubApi'
import Card                          from '@/components/molecules/Card'

function Test() {
  const {data} = useGetGithubUserByNameQuery('facebook')

  return (
    <main>
      <Header />

      <Search />

      {data && (
        <Card
          name={data.name}
          avatar={data.avatar_url}
          bio={data.bio}
          indices={{
            followers: data.followers,
            following: data.following,
            repos: data.public_repos
          }}
          personal_information={{
            location: data.location,
            blog: data.blog,
            twitter: data.twitter_username
          }}
        />
      )}
    </main>
  )
}

export default Test