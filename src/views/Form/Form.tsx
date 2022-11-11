import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Footer from '../Footer';

import './styles.scss';

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { articles, setArticles } = useContext(AppContext);

  return (
    <div className='form'>
      <h2>Procede al pago</h2>
      {
        articles[0] ? (
          <div className='form__article'>
            <h3>Artículo</h3>
            <p>{articles[0].name}</p>
            <p>{articles[0].description}</p>
            <p>{articles[0].price}</p>
          </div>
        ) : (
          <div className='form__article'>
            <p>No hay articulos seleccionados</p>
          </div>
        )
      }
      <input className='form__input' type="text" placeholder='Nombre'/>
      <input className='form__input' type="text" placeholder='Número de teléfono'/>
      <input className='form__input' type="text" placeholder='Estado'/>
      <input className='form__input' type="text" placeholder='Ciudad'/>
      <input className='form__input' type="text" placeholder='C.P.'/>
      <input className='form__input' type="text" placeholder='Número de Tarjeta'/>
      <input className='form__input' type="text" placeholder='CVV'/>
      <div className='form__send'>Finalizar</div>
      <div className='form__cancel' onClick={() => {
        navigate('/home');
        setArticles([]);
      }}>Cancelar</div>
      <Footer/>
    </div>
  );
};

export default Form;
