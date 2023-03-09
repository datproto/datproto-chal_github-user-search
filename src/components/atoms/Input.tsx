import React from 'react'
import Image from 'next/image'

interface IInput {
  icon?: string
  name?: string
  placeholder?: string
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Input({icon='search', name='text', placeholder='Search', handleInputChange}: IInput) {
  return (
    <div className='flex grow items-center gap-2 pl-2'>
      <Image src={`/icon-${icon}.svg`} alt='search-icon' width={25} height={24} />
      <input onChange={handleInputChange} type="text" name={name} placeholder={`${placeholder} ...`} className='grow bg-transparent text-github-blue-queen placeholder:text-github-blue-queen focus:outline-0 dark:text-white dark:placeholder:text-white'/>
    </div>
  )
}

export default Input