import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './leftPart/Logo.jsx';
import Naming from './leftPart/Naming.jsx';
import LangSwitcherButtons from './rightPart_Nav/LangSwitcherButtons.jsx'
import Hamburger from './rightPart_Nav/Hamburger.jsx';

const Header = () => {
    const location= useLocation();
    const [classNameHeader, setClassNameHeader] = useState(location.pathname === '/booking' ? 'booking' : 'index');

    useEffect(() => {
        setClassNameHeader(location.pathname === '/booking' ? 'booking' : 'index');
        console.log('Current URL:', location.pathname);
    }, [location.pathname]);
    

    return (
      <header className={classNameHeader}>
          <Naming classNameHeader={classNameHeader}/>
          <Logo/>
          <nav>
            <LangSwitcherButtons />
            <Hamburger />
          </nav>
      
        <label className="bookbtn" htmlFor="book-button">
          BOOK NOW
      </label>
      <div className="line"></div> 
     

        </header>
    );
}
export default Header;