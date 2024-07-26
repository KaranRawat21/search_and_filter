import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../App';

function Search() {
  const { foodData, setFilteredData } = useContext(userContext);

  const [value, setValue] = useState('');

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue)
    const newFoodAray = foodData.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    setFilteredData(newFoodAray)
  }


  return (
    <div className='w-[250px] xl:w-[300px] h-9'>
      <input type='text' placeholder='Search Food....' className='border-2 border-red-600 rounded-md w-full h-full bg-transparent text-white outline-none p-3' value={value} onChange={handleSearch} />
    </div>
  )
}

export default Search