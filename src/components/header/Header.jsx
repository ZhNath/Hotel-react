import LangSwitcherButtons from './LangSwitcherButtons.jsx'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Naming from './Naming.jsx';

const Header = () => {
    const location= useLocation();
    const [classNameHeader, setClassNameHeader] = useState(location.pathname === '/booking' ? 'booking' : 'index');

    useEffect(() => {
        setClassNameHeader(location.pathname === '/booking' ? 'booking' : 'index');
        console.log('Current URL:', location.pathname);
    }, [location.pathname]);
    
    console.log('Class name:', classNameHeader);

    return (
      <header className={classNameHeader}>
          <Naming classNameHeader={classNameHeader}/>
          <Logo/>
      {/* <nav> */}
       

          <LangSwitcherButtons />
        {/* <button className="language eng" id="eng" title="eng"></button>
        <button className="language deu" id="deu" title="deu"></button>
        <button className="language cro" id="cro" title="cro"></button> */}

        <div className="hamburger">
          <div className="slide-button">
            <label className="ham-lines" htmlFor="control-slide-bar"><i className="fa-solid fa-bars"></i></label>
          </div>
        </div>

      {/* </nav> */}
        <label className="bookbtn" htmlFor="book-button">
          BOOK NOW
      </label>
      <div className="line"></div> 
     

        </header>
    );
}
export default Header;