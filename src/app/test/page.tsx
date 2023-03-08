import React from 'react'
import Image from 'next/image'

function Test() {
  return (
    <main>
      <div className='flex gap-6 dark:bg-github-blue-yankees rounded-2xl py-8 px-6 md:p-10 lg:p-12 w-full md:max-w-xl lg:max-w-3xl'>
        <Image src='https://i.pravatar.cc/300' alt='github-user-avatar' width={300} height={300} className='hidden lg:block rounded-full w-28 h-28 object-fit' />

        <div id="card" className='flex flex-col gap-6'>
          <div id='card_header' className='flex justify-between gap-5'>
            <Image src='https://i.pravatar.cc/300' alt='github-user-avatar' width={300} height={300} className='lg:hidden rounded-full w-20 h-20 object-fit' />
            <div className='flex-grow flex flex-col lg:flex-row justify-between'>
              <div id='github_user_name'>
                <h1 className='dark:text-white capitalize'>The Octocat</h1>
                <p className='text-github-blue-azure'>@octocat</p>
              </div>
              <p className='text-github-gray-slate dark:text-white capitalize'>Joinded 25 jan 2011</p>
            </div>
          </div>

          <div id='card_body' className='flex flex-col gap-6 mt-3 lg:-mt-2'>
            <p className='text-github-blue-queen dark:text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

            {/* GitHub User - Indices */}
            <div className='flex bg-github-white-ghost dark:bg-github-gunmetal-dark rounded-xl p-4 md:px-8'>
              <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                <h4 className='text-github-blue-queen dark:text-white'>Repos</h4>
                <h2 className='text-github-gunmetal-dark dark:text-white'>8</h2>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                <h4 className='text-github-blue-queen dark:text-white'>Followers</h4>
                <h2 className='text-github-gunmetal-dark dark:text-white'>3938</h2>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                <h4 className='text-github-blue-queen dark:text-white'>Following</h4>
                <h2 className='text-github-gunmetal-dark dark:text-white'>9</h2>
              </div>
            </div>
          </div>

          <div id="card_footer" className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-y-3 lg:gap-y-4'>

            {/* Footer - Item */}
            <div className='flex gap-3 items-center'>
              <div className='w-5'>
                <Image src='/icon-location.svg' alt='icon-location' height={20} width={14} />
              </div>
              <h3 className='text-github-blue-queen dark:text-white capitalize'>san francisco</h3>
            </div>

            {/* Footer - Item */}
            <div className='flex gap-3 items-center md:order-3'>
              <div className='w-5'>
                <Image src='/icon-website.svg' alt='icon-location' height={20} width={14} />
              </div>
              <h3 className='text-github-blue-queen dark:text-white'>https://github.blog</h3>
            </div>

            {/* Footer - Item */}
            <div className='flex gap-3 items-center opacity-50 md:order-2'>
              <div className='w-5'>
                <Image src='/icon-twitter.svg' alt='icon-location' height={18} width={20} />
              </div>
              <h3 className='text-github-blue-queen dark:text-white capitalize'>not available</h3>
            </div>

            {/* Footer - Item */}
            <div className='flex gap-3 items-center md:order-4'>
              <div className='w-5'>
                <Image src='/icon-company.svg' alt='icon-location' height={20} width={14} />
              </div>
              <h3 className='text-github-blue-queen dark:text-white capitalize'>@github</h3>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Test