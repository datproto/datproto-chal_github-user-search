'use client'

import React         from 'react'
import ThemeSwitcher from '@/components/atoms/ThemeSwitcher'

function Header() {
  return (
    <div className='mb-5 flex w-full items-center justify-between md:max-w-xl lg:max-w-3xl'>
      <div id="logo" className='text-[26px] font-bold text-[#222731] dark:text-white'>
        devfinder
      </div>

      {/* Component - Theme Switcher */}
      <ThemeSwitcher />
    </div>
  )
}

export default Header