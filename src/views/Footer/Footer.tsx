import React from 'react';

import './styles.scss';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <img src="/images/logo.PNG" alt="Logo" className='home__image-container__logo' />
      <div className='footer__contact'>
        <b>Contacto</b>
        <a href="mailto:conctacto@altosinthehouse.mx">conctacto@altosinthehouse.mx</a>
        <a href="tel:+523481051510" target="_blank" rel="noreferrer">Teléfono: 348-59-39-432</a>
      </div>
    </div>
  );
};

export default Footer;
