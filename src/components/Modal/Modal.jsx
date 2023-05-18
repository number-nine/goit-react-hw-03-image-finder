import PropTypes from 'prop-types';

import css from './Modal.module.css';



const Modal = ({ image, alt, closeHandler }) => {
  return (
    <div className={css.Overlay} onClick={closeHandler}>
      <div className={css.Modal}>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

Modal.protoTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Modal;