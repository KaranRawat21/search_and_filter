
import { createContext, useEffect, useState } from 'react';
import './App.css';
import data from './restaurantChains.json';
import Header from './components/Header';
import MainPage from './components/MainPage';


const userContext = createContext();

function App() {
  const [foodData, setFoodData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    setFoodData(data)
  }, [])

  useEffect(() => {
    setFilteredData(foodData)
  }, [foodData])


  return (

    <userContext.Provider value={{ foodData, setFoodData, filteredData, setFilteredData }}>
      <Header />
      <MainPage />
    </userContext.Provider>

  )
}

export default App
export { userContext }
