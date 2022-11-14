import React from 'react';

import './styles.scss';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <img src="/images/logo.PNG" alt="Logo" className='footer__logo' />
      <div className='footer__contact'>
        <b>Contacto</b>
        <a href="mailto:contacto@altosinthehouse.mx">contacto@altosinthehouse.mx</a>
        <a href="tel:+523481051510" target="_blank" rel="noreferrer">Teléfono: 348-59-39-432</a>
      </div>
    </div>
  );
};

export default Footer;
