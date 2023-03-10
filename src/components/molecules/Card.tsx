import React from 'react'
import Image        from 'next/image'
import Moment from 'react-moment'
import {URLExtract} from '@/utils/Extractor'
import Link from 'next/link'

interface ICard {
  name: string
  github: {
    name: string
    url: string
  }
  avatar: string
  bio?: string
  twitter?: string
  indices?: {
    followers?: number
    following?: number
    repos?: number
  }
  personal_information?: {
    location?: string
    blog?: string
    twitter?: string
    joinDate?: string
  }
}
function Card({name, github, avatar, bio, indices, personal_information}: ICard) {
  return (
    <div id="card" className='flex w-full gap-6 rounded-2xl bg-github-white-main py-8 px-6 dark:bg-github-blue-yankees md:p-10 lg:p-12'>
      <Image src={avatar} alt='github-user-avatar' width={300} height={300} className='hidden h-28 w-28 rounded-full lg:block' />

      <div className='flex grow flex-col gap-6'>
        <div id='card_header' className='flex justify-between gap-5'>
          <Image src={avatar} alt='github-user-avatar' width={300} height={300} className='h-20 w-20 rounded-full lg:hidden' />
          <div className='flex grow flex-col justify-between lg:flex-row'>
            <div id='github_user_name'>
              <h1 className='capitalize dark:text-white'>{name}</h1>
              <Link href={github.url}>
                <p className='text-github-blue-azure'>@{github.name}</p>
              </Link>
            </div>
            <p className='capitalize text-github-gray-slate dark:text-white'>
              Joined in {" "}
              <Moment format='DD MMM YYYY'>
                {personal_information?.joinDate}
              </Moment>
            </p>
          </div>
        </div>

        <div id='card_body' className='mt-3 flex flex-col gap-6 lg:-mt-2'>
          <p className='text-github-blue-queen dark:text-white'>{bio}</p>

          {/* GitHub User - Indices */}
          <div className='flex rounded-xl bg-github-white-ghost p-4 dark:bg-github-gunmetal-dark md:px-8'>
            <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
              <h4 className='text-github-blue-queen dark:text-white'>Repos</h4>
              <h2 className='text-github-gunmetal-dark dark:text-white'>{indices?.repos}</h2>
            </div>
            <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
              <h4 className='text-github-blue-queen dark:text-white'>Followers</h4>
              <h2 className='text-github-gunmetal-dark dark:text-white'>{indices?.followers}</h2>
            </div>
            <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
              <h4 className='text-github-blue-queen dark:text-white'>Following</h4>
              <h2 className='text-github-gunmetal-dark dark:text-white'>{indices?.following}</h2>
            </div>
          </div>
        </div>

        <div id="card_footer" className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-y-3 lg:gap-y-4'>

          {/* Footer - Item */}
          {personal_information && personal_information.location && (
            <div className={`flex items-center gap-3 ${personal_information && personal_information.location ? 'opacity-100' : 'opacity-50'} opacity-50 md:order-1`}>
              <div className='w-5'>
                <Image src='/icon-location.svg' alt='icon-location' height={20} width={14} />
              </div>
                <h3 className='capitalize text-github-blue-queen dark:text-white'>{personal_information.location}</h3>
            </div>
          )}

          {/* Footer - Item */}
          {personal_information && personal_information.blog && (
            <div className={`flex items-center gap-3 ${personal_information && personal_information.blog ? 'opacity-100' : 'opacity-50'} opacity-50 md:order-3`}>
              <div className='w-5'>
                <Image src='/icon-website.svg' alt='icon-location' height={20} width={14} />
              </div>
              <Link href={personal_information.blog}>
                <h3 className='text-github-blue-queen hover:underline dark:text-white'>
                  <URLExtract url={personal_information.blog} />
                </h3>
              </Link>
            </div>
          )}

          {/* Footer - Item */}
          <div className={`flex items-center gap-3 ${personal_information && personal_information.twitter ? 'opacity-100' : 'opacity-50'} opacity-50 md:order-2`}>
            <div className='w-5'>
              <Image src='/icon-twitter.svg' alt='icon-location' height={18} width={20} />
            </div>
            <h3 className='text-github-blue-queen dark:text-white'>{personal_information?.twitter}</h3>
          </div>

          {/* Footer - Item */}
          <div className='flex items-center gap-3 md:order-4'>
            <div className='w-5'>
              <Image src='/icon-company.svg' alt='icon-location' height={20} width={14} />
            </div>
            <h3 className='text-github-blue-queen hover:underline dark:text-white'>
              <Link href={github.url}>
                @{github.name}
              </Link>
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card