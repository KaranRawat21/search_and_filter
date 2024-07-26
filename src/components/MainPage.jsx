import React from 'react'
import Img from '../images/bg-img.png'
import { useContext } from 'react'
import { userContext } from '../App'
import Item from './Item';


function MainPage() {
  const { filteredData } = useContext(userContext);
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center h-screen flex flex-col gap-4 items-center p-4 overflow-scroll xl:overflow-auto ">
      {filteredData.length > 0 ? (
        <ul className='flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:justify-center'>
          {filteredData.map((item, index) => (
            <li key={index}>
              <Item item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-white text-xl'>No items found</p>
      )}


    </div>
  )
}

export default MainPage
