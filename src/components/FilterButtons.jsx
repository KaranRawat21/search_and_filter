import React, { useState, useContext } from 'react';
import { userContext } from '../App';

function FilterButtons() {
  const { foodData, setFilteredData } = useContext(userContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  const filterByCategory = (index) => {
    setSelectedIndex(index);

    if (index === 0) {
      setFilteredData(foodData);
    } else {
      const category = buttons[index];
      const filteredData = foodData.filter(item => item.category === category);
      setFilteredData(filteredData);
    }
  };

  return (
    <div className='flex gap-6'>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${selectedIndex === index ? 'bg-orange-500' : 'bg-red-600'} px-4 xl:px-10 py-2 xl:py-3 text-white font-medium rounded-md hover:bg-orange-500 text-[12px]`}
          onClick={() => filterByCategory(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
