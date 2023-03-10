'use client'

import React                         from 'react'
import Header                        from '@/components/molecules/Header'
import Search                        from '@/components/molecules/Search'
import {useLazyGetGithubUserByNameQuery} from '@/reducers/githubApi'
import Card                          from '@/components/molecules/Card'
import {animated, useTrail} from '@react-spring/web'

function Test() {
  const [githubUser, setGithubUser] = React.useState<string>('airbnb')

  const [getGithubUserByName, {data}] = useLazyGetGithubUserByNameQuery()

  const [display, setDisplay] = React.useState<boolean>(false)

  const handleGithubSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents page reload on form submission
    getGithubUserByName(githubUser)
  }

  const handleGithubSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGithubUser(event.target.value)
  }


  // Animation dots
  const dots = ['.', '.', '.']
  const loadingDots = useTrail(dots.length, {
    from: {
      y: 0
    },
    to: {
      y: -10
    },
    config: {
      duration: 1000
    },
    loop: true
  })

  return (
    <main>
      <Header />

      <Search handleSubmit={handleGithubSearchSubmit} handleSearchTerm={handleGithubSearchTerm} />

      {data ? (
        <>
          {display ? (
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
            <div
              className='flex w-full gap-6 rounded-2xl bg-github-white-main py-8 px-6 dark:bg-github-blue-yankees dark:text-white md:p-10 lg:p-12'
            >
              Getting user data {loadingDots.map((spring, key) => {
                return (
                  <animated.span key={key} style={{
                    ...spring
                  }}>
                    {dots[key]}
                  </animated.span>
                )
            })}
            </div>
          )}
        </>
      ) : (
        <div
          className='flex w-full gap-6 rounded-2xl bg-github-white-main py-8 px-6 dark:bg-github-blue-yankees dark:text-white md:p-10 lg:p-12'
        >
          Please input a Github username above to search for a user.
        </div>
      )}
    </main>
  )
}

export default Test