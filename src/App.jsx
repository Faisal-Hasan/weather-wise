import React, { useState } from 'react'
import Header from './Components/Header.jsx'
import Search from './Components/Search.jsx'
import WeatherCard from './Components/WeatherCard.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'
const App = () => {

  const [weatherDetails,setWeatherDetails]=useState(null)
 
  return (
    <div className='app'>

      <div className="app-container">
      <Header/>
      <Search setWeatherDetails={setWeatherDetails}/>
            {weatherDetails !== null && (
        <WeatherCard weatherDetails={weatherDetails} />
      )} 
      <Footer/>
      </div>

    </div>
  )
}

export default App
// for each component we can make individual css files like footer.css and same for others as well.
// In app.css we put whole app css mainly, which the whole app may follow