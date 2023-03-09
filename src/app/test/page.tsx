'use client'

import React                         from 'react'
import Header                        from '@/components/molecules/Header'
import Search                        from '@/components/molecules/Search'
import {useLazyGetGithubUserByNameQuery} from '@/reducers/githubApi'
import Card                          from '@/components/molecules/Card'

function Test() {
  const [githubUser, setGithubUser] = React.useState<string>('airbnb')

  const [getGithubUserByName, {data}] = useLazyGetGithubUserByNameQuery()

  const handleGithubSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents page reload on form submission
    getGithubUserByName(githubUser)
  }

  const handleGithubSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGithubUser(event.target.value)
  }

  return (
    <main>
      <Header />

      <Search handleSubmit={handleGithubSearchSubmit} handleSearchTerm={handleGithubSearchTerm} />

      {data ? (
        <Card
          name={data.name}
          github={{
            name: data.login,
            url: data.html_url
          }}
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
            twitter: data.twitter_username,
            joinDate: data.created_at
          }}
        />
      ) : (
        <div className='flex w-full gap-6 rounded-2xl bg-github-white-main py-8 px-6 dark:bg-github-blue-yankees md:p-10 lg:p-12'>
          Please input a Github username above ...
        </div>
      )}
    </main>
  )
}

export default Test