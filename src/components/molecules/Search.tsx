import React from 'react'
import Image from 'next/image'
import Input from '@/components/atoms/Input'

function Search() {
  return (
    <form className='group flex w-full items-center justify-between gap-2 rounded-2xl bg-github-white-main p-2 shadow-lg dark:bg-github-blue-yankees dark:shadow-none md:max-w-xl lg:max-w-3xl'>
      <Input placeholder='Search GitHub user' />

      <button type='button' className='cursor-pointer rounded-2xl bg-github-blue-azure px-4 py-3 text-[14px] font-bold capitalize text-white group-hover:bg-github-blue-azure/[.5]'>Search</button>
    </form>
  )
}

export default Search