import { useState } from 'react';
import Modal from '../shared/Modal';
import ModalBooking from './ModalBooking';

const CardCard = ({ car }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }

    const onBookNow = () => {
        setIsOpen(true);
    }

    // render modal if isOpen is true
    const renderModal = isOpen && (
      <Modal onClose={onClose}>
        <ModalBooking car={car} />
      </Modal>
    )


  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-lg p-6 w-full max-w-sm">
      {renderModal}
      <img
        src={car.image}
        alt="car"
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <h3 className="text-xl font-semibold mb-4">{car.name}</h3>
      <p className="text-sm text-slate-500 mb-4">{car.description}</p>
      <button
        className="w-full bg-orange-500 cursor-pointer text-white rounded-md py-2 font-semibold"
        onClick={onBookNow}
      >
        Book now
      </button>
    </div>
  );
};

export default CardCard;