import Modal from './Modal.jsx';
import { useContext } from 'react';
import  BasicContext  from '../context/BasicContext.jsx';

const ModalRenderer = () => {
  const { isModalOpen } = useContext(BasicContext);
  return (
    isModalOpen && <Modal isOpen={isModalOpen} onClose={() => console.log("Закрыто!")}/>
)};

export default ModalRenderer;
