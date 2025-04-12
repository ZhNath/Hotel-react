// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
import Rame from './components/header/Rame.jsx'
import { useContext, useEffect} from 'react'
import BasicContext from './context/BasicContext.jsx'


const App = () => {
  // const [count, setCount] = useState(0)
const {isMobile, changeIsMobile} = useContext(BasicContext);

useEffect(() => {
  const handleResize = () => {
    changeIsMobile(window.innerWidth <= 481);
  };
  window.addEventListener('resize', handleResize);
  return () => 
    window.removeEventListener('resize', handleResize);
  },[changeIsMobile]);
  console.log("isMobile in App:", isMobile);
  return (
    <>
    <Rame/>
     <Header isMobile={isMobile}/>
     <Outlet/>
     <Footer/>

    </>
  )
}

export default App
