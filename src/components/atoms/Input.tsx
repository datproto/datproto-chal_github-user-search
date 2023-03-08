import React from 'react'
import Image from 'next/image'

interface IInput {
  icon?: string
  placeholder?: string
}
function Input({icon='search', placeholder='Search'}: IInput) {
  return (
    <div className='flex grow items-center gap-2 pl-2'>
      <Image src={`/icon-${icon}.svg`} alt='search-icon' width={25} height={24} />
      <input type="text" placeholder={`${placeholder} ...`} className='grow bg-transparent text-github-blue-queen placeholder:text-github-blue-queen focus:outline-0 dark:text-white dark:placeholder:text-white'/>
    </div>
  )
}

export default Input