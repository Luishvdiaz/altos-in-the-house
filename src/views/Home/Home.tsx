import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Footer from '../Footer';

import './styles.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { setArticles } = useContext(AppContext);

  return (
    <div className='home'>
      <div className='home__image-container'>
        <img src="/images/logo.PNG" alt="Logo" className='home__image-container__logo' />
        <img src="/images/arandas.jpg" alt="Arandas" className='home__image-container__image' />
      </div>
      <div className='home__nosotros'>
        <p> <b>¿Quiénes somos?</b> <br /><br />"Altos in the house"  es una empresa dedicada a la distribución de productos típicos de los 12 municipios de La Región De Los Altos de Jalisco</p>
      </div>
      <div className='home__info'>
        <h2>Región de los Altos</h2>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Yahualica</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/yahualica.png" alt="Yahualica" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Valle de Guadalupe</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/valle-de-guadalupe.jpg" alt="Valle de Guadalupe" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Tepatitlán De Morelos</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/tepa.png" alt="Tepatitlán De Morelos" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">San Miguel el Alto</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/san-miguel.png" alt="San Miguel el Alto" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">San Julián</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/san-julian.png" alt="San Julián" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">San Ignacio Cerro Gordo</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/san-ignacio.png" alt="San Ignacio Cerro Gordo" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">San Juan De Los Lagos</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/san-juan-de-los-lagos.jpg" alt="San Juan De Los Lagos" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Jesús María</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/jesus-maria.png" alt="Jesús María" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Jalostotitlán</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/jalos.jpg" alt="Jalostotitlán" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Lagos De Moreno</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/lagos.png" alt="Lagos De Moreno" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Arandas</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/arandas.png" alt="Arandas" className='home__info__item__image' />
        </div>
        <div className='home__info__item'>
          <p className='home__info__item__title' translate="no">Acatic</p>
          <img src="/images/location-pin.png" alt="location-pin" className='home__info__item__location-pin' />
          <img src="/images/acatic.png" alt="Acatic" className='home__info__item__image' />
        </div>
      </div>
      <hr />
      <div className='home__envios'>
        <h2>Envíos a toda la República Mexicana</h2>
        <img src="/images/mexico.png" alt="Acatic" className='home__envios__image' />
      </div>
      <hr />
      <div className='home__paquetes'>
        <h2>El obsequio de los Altos</h2>
        <div className='home__paquetes__container'>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Paquete 1 "Tradición"
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>1 mes</li>
                  <li>12 souvenirs</li>
                  <li>1 por cada municipio de La Región De Los Altos</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">Por sólo</div>
                <p className="card__price-value">$500 MXN</p>
                <p className="card__button-cta" onClick={() => {
                  navigate('/form');
                  setArticles([
                    {
                      description: '1 mes, 12 souvenirs',
                      name: 'Paquete 1 "Tradición"',
                      price: '$500 MXN'
                    }
                  ]);
                }}>¡Contrata ahora!</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  Paquete 2 "Alteño"
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 meses</li>
                  <li>12 souvenirs</li>
                  <li>1 por cada municipio de La Región De Los Altos</li>
                  <li>El contenido de las cajas serán diferentes en los 3 meses.</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">Por sólo</div>
                <p className="card__price-value">$800 MXN</p>
                <p className="card__button-cta" onClick={() => {
                  navigate('/form');
                  setArticles([
                    {
                      description: '3 meses, 12 souvenirs',
                      name: 'Paquete 2 "Alteño"',
                      price: '$800 MXN'
                    }
                  ]);
                }}>¡Contrata ahora!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
