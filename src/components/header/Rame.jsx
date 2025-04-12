import React, { useContext } from "react";
import BasicContext from "../../context/BasicContext";

const Rame = () => {
    const { language } = useContext(BasicContext);
    if (!language) {
        console.error('Контекст не передаёт язык');
        return <div>Ошибка: контекст не передан</div>;
    }
    let className = '';
    console.log('languageRame:', language);
    switch (language) {
          case 'eng':
               className='english';
               break;
          case 'deu':
                className='german';
                break;
          case 'cro':
                className='croatian';
                break;
          default:
            return null; 
       }
     
    return (
        <div className={`rame ${className}`}>
        </div>
    );   
    
}

export default Rame;