import React from 'react';
import Footer from '../Footer';

import './styles.scss';

const Nosotros: React.FC = () => {
  return (
    <div className='nosotros'>
      <img src="/images/logo.PNG" alt="Logo" className='nosotros__logo' />
      <p><b>¿Quiénes somos?</b><br /> “Altos in the house” somos una empresa dedicada a la exportación de productos de la más alta calidad de los diferentes lugares de la Región de los Altos.</p>
      <p><b>Misión</b><br /> Somos una empresa que se dedica a llevar a casa los recuerdos y las vivencias más felices de cualquier persona, garantizando así la experiencia de revivir recuerdos de su lugar de origen y disfrutar con amigos y familiares las artesanías que requieran.</p>
      <p><b>Filosofía</b><br /> Dedicar a la empresa a llevar y fomentar en sus clientes los recuerdos en las cosas más simples a través de valores como el respeto y honestidad, logrando que cada cliente se sienta satisfecho y haga presente el valor merecido en cada pieza que adquieren mediante nuestra empresa</p>
      <p><b>Visión</b><br /> Ser una empresa líder y reconocida por llevar a manos extranjeras la cultura mexicana y el valor que tienen las artesanías actualmente en la Región De Los Altos, y a su vez, ofrecer un servicio de alta calidad, dando soluciones inmediatas en el trato al cliente.</p>
      <div className='nosotros__group'>
        <div className='nosotros__group__item'>
          <img src="/images/1.jpg" alt="Logo" className='nosotros__group__item__logo' />
          <b className='nosotros__group__item__text'>Denisse Estefanya Leandro Jiménez</b>
          <p className='nosotros__group__item__text'>“Un pequeño paso trae un salto de oportunidades increíbles”</p>
        </div>
        <div className='nosotros__group__item'>
          <img src="/images/2.jpg" alt="Logo" className='nosotros__group__item__logo' />
          <b className='nosotros__group__item__text'>Danna Alison Zepeda Rodríguez</b>
          <p className='nosotros__group__item__text'>“La pasión por lo que haces te hará entender que los límites son mentales”</p>
        </div>
        <div className='nosotros__group__item'>
          <img src="/images/4.jpg" alt="Logo" className='nosotros__group__item__logo' />
          <b className='nosotros__group__item__text'>Luz Andrea López Reyes</b>
          <p className='nosotros__group__item__text'>“Para conseguir tu éxito, tu deseo de éxito tiene que ser mayor que tu miedo al fracaso”</p>
        </div>
        <div className='nosotros__group__item'>
          <img src="/images/3.jpg" alt="Logo" className='nosotros__group__item__logo' />
          <b className='nosotros__group__item__text'>Andrea Ortega Galindo</b>
          <p className='nosotros__group__item__text'>“El único modo de hacer un gran trabajo es amar lo que haces”</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;
