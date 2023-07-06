import './App.scss'
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'
import Footer from './components/Footers/Footer';
import SearchModal from './components/Modals/SearchModal';

function App() {
  return (
    <div className="App">
      <div className='nav-container'>
        <div className="nav-contents">
          <Navbar></Navbar>
        </div>

      </div>

      <div className='app_container'>

        {/* Content Router */}
        <Routes>
          <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="register" element={LazyLoad(() => import("@pages/Registers/Register"))()} />
          <Route path="login" element={LazyLoad(() => import("@pages/Logins/Login"))()} />
          <Route path="checkout" element={LazyLoad(() => import("@pages/Checkouts/Checkout"))()} />
          <Route path="cart" element={LazyLoad(() => import("@pages/Carts/Cart"))()} />
          <Route path="menu/:type" element={LazyLoad(() => import("@pages/Menus/Menu"))()}>
          </Route>
        </Routes>
      </div>

      <div className='footer-container'>
        <div className="footer-contents">
          <Footer />
          <SearchModal />
        </div>
      </div>
    </div>
  );
}

export default App;
