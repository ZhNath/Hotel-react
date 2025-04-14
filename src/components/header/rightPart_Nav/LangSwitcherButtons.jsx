import React from 'react';
import { useContext, useState } from 'react';
import BasicContext from '../../../context/BasicContext.jsx';
import ClickOut from '../../../functions/ClickOut.jsx';


const LanguageSwitcherButtons = () => {
    const  {language, changeLanguage,
            isMobile
    }  = useContext(BasicContext);

    
    const languages = [{code:'eng', name:'English'},
         {code:'deu', name:'German'}, 
         {code:'cro', name:'Croatian'},];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    }
    
    return (
        isMobile ? (
        <ClickOut onClickOutside={handleClickOutside}>
            <div className="custom-select">
                <button className="select dropdown-button" 
                title={language}
                onClick={toggleDropdown}>
                        <span> {language}</span>
                </button>
                {isDropdownOpen &&(
                    <ul id="lan" className="select-dropdown">
                        {   languages.map((lang) => (
                            <li value={lang.code} 
                            className="select-option"
                            key={lang.code}
                            onClick={() => {changeLanguage(lang.code); toggleDropdown();}}
                            >
                                {lang.name}
                            </li>
                    ))}
                    </ul>
                )
                }
            </div>
        </ClickOut>
        ) : (
        
        <>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`language butt ${lang.code} ${language === lang.code ? 'active' : ''}`}
                    title={lang.code}
                >
                </button>
            ))}
        </>
    ))
};
export default LanguageSwitcherButtons;
