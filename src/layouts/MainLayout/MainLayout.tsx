
import { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './styles.scss';

export const MainLayout = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const { articles } = useContext(AppContext);

  return (
    <div className='main-layout'>
      <nav className="main-layout__menu">
        <div>
          <img src="/images/menu.png" alt="Search"  className="main-layout__menu__button" onClick={() => setMenu(!menu)}/>
        </div>
        <div className={`main-layout__menu__menu-mobile main-layout__menu__menu-mobile${menu ? '--open' : ''}`}>
          <div onClick={() => { navigate('/home'); setMenu(false);}} className='main-layout__menu__menu-mobile__clickeable-option'>Inicio</div>
          <div onClick={() => {navigate('/nosotros'); setMenu(false);}} className='main-layout__menu__menu-mobile__clickeable-option'>Nosotros</div>
          <div className='main-layout__menu__chopping-cart-container' onClick={() => navigate('/form')}>
            <div className='main-layout__menu__chopping-cart-container__dot'>{articles.length}</div>
            <img src="/images/carrito.png" alt="Shopping cart" className='main-layout__menu__chopping-cart-container__image' />
          </div>
        </div>
        <ul>
          <li onClick={() => navigate('/home')} className='main-layout__menu__clickeable-option'>Inicio</li>
          <li onClick={() => navigate('/nosotros')} className='main-layout__menu__clickeable-option'>Nosotros</li>
          <li>
            <div className="main-layout__menu__search-container">
              <img src="/images/buscar.png" alt="Search" className='main-layout__menu__search-container__image' />
              <input type="text" placeholder='Buscar' className='main-layout__menu__search-container__input' />
            </div>
          </li>
          <li className='main-layout__menu__chopping-cart-container' onClick={() => navigate('/form')}>
            <div className='main-layout__menu__chopping-cart-container__dot'>{articles.length}</div>
            <img src="/images/carrito.png" alt="Shopping cart" className='main-layout__menu__chopping-cart-container__image' />
          </li>
        </ul>
      </nav>
      <div className='main-layout__outlet'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
