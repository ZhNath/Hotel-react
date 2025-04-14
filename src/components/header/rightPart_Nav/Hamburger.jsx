import React from 'react';
import Modal from '../../../functions/Modal.jsx';
import { useContext } from 'react';
import BasicContext from '../../../context/BasicContext.jsx';

const Hamburger = () => {
 const {isModalOpen, setIsModalOpen, isMobile} = useContext(BasicContext);

  const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleClickOutside = () => {
      setIsModalOpen(false);
    };
return(
<>
  <div className="hamburger">
              <button className="ham-lines" onClick={() => toggleModal()}>
                   <i className="fa-solid fa-bars"></i>
              </button>
  </div>
  <Modal
      type={"sidebar"}
      size={isMobile?["100vw", "80vh"]:["50vw", "80vh"]}
      isOpen={isModalOpen}
      onClose={closeModal}
      onClickOutside={handleClickOutside}>
      <div className="slide-content">
        <a href="./gallery.html#house-anchor" >ABOUT</a>
        <a href="https://www.loverogoznica.eu/" target="_blank">PLACE</a>
        <a href="./gallery.html#contact-anchor" >CONTACT</a>
        <a href="./gallery.html#attraction-anchor">ATTRACTION</a>
        <a href="#map" target="_blank" >LOCATION</a>
      </div>
  </Modal>
</>)}
export default Hamburger;