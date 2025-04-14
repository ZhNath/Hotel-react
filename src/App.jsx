// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
import Rame from './components/header/rightPart_Nav/Rame.jsx'
import { useContext, useEffect} from 'react'
import BasicContext from './context/BasicContext.jsx'


const App = () => {
const {isMobile, changeIsMobile} = useContext(BasicContext);
const {isModalOpen} = useContext(BasicContext);

useEffect(() => {
  const handleResize = () => {
    changeIsMobile(window.innerWidth <= 481);
  };
  window.addEventListener('resize', handleResize);
  return () => 
    window.removeEventListener('resize', handleResize);
  },[changeIsMobile]);

  return (
    <div className={`app-container ${isModalOpen ? 'inactive' : ''}`}>
     <Rame/>
     <Header isMobile={isMobile}/>
     <Outlet/>
     <Footer/>

    </div>
  )
}

export default App
