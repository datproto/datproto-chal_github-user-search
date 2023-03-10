import React from 'react'
import Input from '@/components/atoms/Input'

interface ISearch {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  handleSearchTerm?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error: boolean
}

function Search({ handleSubmit, handleSearchTerm, error=false }: ISearch) {
  return (
    <form
      onSubmit={handleSubmit}
      className='group flex w-full items-center justify-between gap-3 rounded-2xl bg-github-white-main p-2 shadow-lg dark:bg-github-blue-yankees dark:shadow-none lg:gap-6'>
      <Input name='search' placeholder='Search GitHub user' handleInputChange={handleSearchTerm} />

      {error && <p className='font-bold capitalize text-[#F74646]'>no results</p>}

      <button
        type='submit'
        className='cursor-pointer rounded-2xl bg-github-blue-azure px-4 py-3 text-[14px] font-bold capitalize text-white group-hover:bg-github-blue-azure/[.5]'
      >
        Search
      </button>
    </form>
  )
}

export default Search