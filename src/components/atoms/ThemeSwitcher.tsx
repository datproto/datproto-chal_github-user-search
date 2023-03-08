import React    from 'react'
import Image    from 'next/image'
import useTheme from 'next-theme'

function ThemeSwitcher() {
  const {theme, setTheme} = useTheme()

  const changeTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className='flex cursor-pointer items-center gap-2 font-bold uppercase text-github-blue-queen dark:text-white' onClick={() => changeTheme()}>
        <span className='tracking-[2.5px]'>
          {theme === 'light' ? 'dark' : 'light'}
        </span>
      {theme === 'light' ? (
        <Image src='/icon-moon.svg' alt='theme-dark-icon' height={20} width={20} />
      ) : (
        <Image src='/icon-sun.svg' alt='theme-light-icon' height={20} width={20} />
      )}
    </div>
  )
}

export default ThemeSwitcher