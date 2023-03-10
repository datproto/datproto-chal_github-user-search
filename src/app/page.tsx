'use client'

import React, {useEffect}                from 'react'
import {useLazyGetGithubUserByNameQuery} from '@/reducers/githubApi'
import Header                            from '@/components/molecules/Header'
import Search                            from '@/components/molecules/Search'
import Card                      from '@/components/molecules/Card'
import {motion} from 'framer-motion'

export default function Home() {
  const [githubUser, setGithubUser] = React.useState<string>('airbnb')

  const [getGithubUserByName, {data, error}] = useLazyGetGithubUserByNameQuery()

  const [display, setDisplay] = React.useState<boolean>(false)

  const handleGithubSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents page reload on form submission
    getGithubUserByName(githubUser)
    setDisplay(false)
  }

  const handleGithubSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGithubUser(event.target.value)
  }

  useEffect(() => {
    if (data) {
      const timerDisplay = setTimeout(() => {
        setDisplay(true)
      }, 5000)

      return () => clearTimeout(timerDisplay)
    }
  }, [data])

  const cardFadedInAnimation = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  }


  // Animation dots
  const dots = ['.', '.', '.']

  return (
    <main>
      <Header />

      <Search handleSubmit={handleGithubSearchSubmit} handleSearchTerm={handleGithubSearchTerm} error={!!error} />

      {data ? (
        <>
          {display ? (
            <motion.div
              className='w-full'
              initial='hidden'
              animate='visible'
              variants={cardFadedInAnimation}
            >
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
            </motion.div>
          ) : (
            <div
              className='flex w-full gap-2 rounded-2xl bg-github-white-main py-8 px-6 dark:bg-github-blue-yankees dark:text-white md:p-10 lg:p-12'
            >
              Getting user data {dots.map((spring, key) => {
              return (
                <motion.span
                  key={key}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: (key / 2) + 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  {dots[key]}
                </motion.span>
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
