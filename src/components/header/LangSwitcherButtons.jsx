import React from 'react';
import { useContext } from 'react';
import BasicContext from '../../context/BasicContext.jsx';


const LanguageSwitcherButtons = () => {
    const  {language, changeLanguage,
            isMobile
    }  = useContext(BasicContext);

    console.log("isMobile in switcher:", isMobile); 
    
    
    const languages = [{code:'eng', name:'English'},
         {code:'deu', name:'German'}, 
         {code:'cro', name:'Croatian'},];

    return (
        isMobile ? (
            
        <nav>
            <div className="custom-select">
                <button className="select dropdown-button" title={language}>{language}</button>
                <ul id="lan" className="select-dropdown">
                    {languages.map((lang) => (
                        <li value={lang.code} className="select-option" key={lang.code}>
                            {lang.name}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        ) : (
        
        <nav>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`language butt ${lang.code} ${language === lang.code ? 'active' : ''}`}
                    title={lang.code}
                >
                </button>
            ))}
        </nav>
    ))
};
export default LanguageSwitcherButtons;
