import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


import { MainLayout } from './layouts';
import {
  Error404,
  Home,
  Nosotros,
  Form
} from './views';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Navigate to='/home' replace={true} />} />
          <Route path='home' element={<Home />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='form' element={<Form />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;

