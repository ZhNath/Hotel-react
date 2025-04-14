import React from "react";
import { createContext,  useState } from "react";

const BasicContext = createContext();
export default BasicContext;

const BasicProvider = ({ children }) => {
  const [language, setLanguage] = useState("eng");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 481);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const changeIsMobile = (isMobile) => {
    setIsMobile(isMobile);
  };

  return (
    <BasicContext.Provider value={{ language, changeLanguage,
     isMobile, changeIsMobile, isModalOpen, setIsModalOpen }}>
      {children}
    </BasicContext.Provider>
  );
};



export { BasicProvider }; ;
