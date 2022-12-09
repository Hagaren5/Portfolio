import { Route, Routes } from 'react-router-dom'

import './App.css'
import LandingScreen from './Screens/LandingScreen'
import AboutMeScreen from './Screens/AboutMeScreen'
import NavigationBar from './Components/NavigationBar'
import PortfolioScreen from './Screens/PortfolioScreen'
import ContactScreen from './Screens/ContactScreen'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/aboutme" element={<AboutMeScreen />} />
        <Route path="/portfolio" element={<PortfolioScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>      
    </div>
  )
}

export default App
