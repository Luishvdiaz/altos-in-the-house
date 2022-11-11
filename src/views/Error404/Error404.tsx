import React from 'react';

import { useNavigate } from 'react-router-dom';

import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const Error404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='error-404'>
      <h1 className='error-404__title'>Error 404</h1>
      <img src="/images/error-404.png" alt="Error 404" className='error-404__image' />
      <h1 className='error-404__sub-title'>No pudimos encontrar lo que buscabas :(</h1>
      <button
        onClick={() => navigate('/home')}
        className='error-404__button'
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size='2x' />
        Regresar
      </button>
    </div>
  );
};

export default Error404;
