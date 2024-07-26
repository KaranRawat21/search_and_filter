import React from 'react'
import Search from './Search'
import FilterButtons from './FilterButtons'

function Header() {
  return (
    <div className='bg-gray-700 h-[200px] flex flex-col items-center justify-center gap-4 xl:gap-3'>
      <h1 className='text-[30px] xl:text-[50px] font-bold text-white'>F<span className='text-red-600'>oo</span>dy Z<span className='text-red-600'>o</span>ne</h1>
      <Search />
      <FilterButtons />
    </div>
  )
}

export default Header