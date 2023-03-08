import React  from 'react'
import Image  from 'next/image'
import Header from '@/components/molecules/Header'
import Search from '@/components/molecules/Search'

function Test() {
  return (
    <main>
      <Header />

      <Search />

      <div className='flex w-full gap-6 rounded-2xl bg-github-white-main py-8 px-6 dark:bg-github-blue-yankees md:max-w-xl md:p-10 lg:max-w-3xl lg:p-12'>
        <Image src='https://i.pravatar.cc/300' alt='github-user-avatar' width={300} height={300} className='hidden h-28 w-28 rounded-full lg:block' />

        <div id="card" className='flex flex-col gap-6'>
          <div id='card_header' className='flex justify-between gap-5'>
            <Image src='https://i.pravatar.cc/300' alt='github-user-avatar' width={300} height={300} className='h-20 w-20 rounded-full lg:hidden' />
            <div className='flex grow flex-col justify-between lg:flex-row'>
              <div id='github_user_name'>
                <h1 className='capitalize dark:text-white'>The Octocat</h1>
                <p className='text-github-blue-azure'>@octocat</p>
              </div>
              <p className='capitalize text-github-gray-slate dark:text-white'>Joinded 25 jan 2011</p>
            </div>
          </div>

          <div id='card_body' className='mt-3 flex flex-col gap-6 lg:-mt-2'>
            <p className='text-github-blue-queen dark:text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

            {/* GitHub User - Indices */}
            <div className='flex rounded-xl bg-github-white-ghost p-4 dark:bg-github-gunmetal-dark md:px-8'>
              <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
                <h4 className='text-github-blue-queen dark:text-white'>Repos</h4>
                <h2 className='text-github-gunmetal-dark dark:text-white'>8</h2>
              </div>
              <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
                <h4 className='text-github-blue-queen dark:text-white'>Followers</h4>
                <h2 className='text-github-gunmetal-dark dark:text-white'>3938</h2>
              </div>
              <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
                <h4 className='text-github-blue-queen dark:text-white'>Following</h4>
                <h2 className='text-github-gunmetal-dark dark:text-white'>9</h2>
              </div>
            </div>
          </div>

          <div id="card_footer" className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-y-3 lg:gap-y-4'>

            {/* Footer - Item */}
            <div className='flex items-center gap-3'>
              <div className='w-5'>
                <Image src='/icon-location.svg' alt='icon-location' height={20} width={14} />
              </div>
              <h3 className='capitalize text-github-blue-queen dark:text-white'>san francisco</h3>
            </div>

            {/* Footer - Item */}
            <div className='flex items-center gap-3 md:order-3'>
              <div className='w-5'>
                <Image src='/icon-website.svg' alt='icon-location' height={20} width={14} />
              </div>
              <h3 className='text-github-blue-queen dark:text-white'>https://github.blog</h3>
            </div>

            {/* Footer - Item */}
            <div className='flex items-center gap-3 opacity-50 md:order-2'>
              <div className='w-5'>
                <Image src='/icon-twitter.svg' alt='icon-location' height={18} width={20} />
              </div>
              <h3 className='capitalize text-github-blue-queen dark:text-white'>not available</h3>
            </div>

            {/* Footer - Item */}
            <div className='flex items-center gap-3 md:order-4'>
              <div className='w-5'>
                <Image src='/icon-company.svg' alt='icon-location' height={20} width={14} />
              </div>
              <h3 className='capitalize text-github-blue-queen dark:text-white'>@github</h3>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Test