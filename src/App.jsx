import './App.scss'
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'
import Footer from './components/Footers/Footer';
import {useEffect} from 'react'
function App() {
  async function reloadSdkFb() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // window.fbAsyncInit = function() {
    //     FB.init({
    //         appId: "1136261117060704",
    //         xfbml: true,
    //         version: 'v15.0'
    //     });
    // };
  }
  useEffect(() =>{
    reloadSdkFb()
  }, [])
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
          <Route path="purchase" element={LazyLoad(() => import("@pages/Checkouts/Purchase"))()} />
          <Route path="order" element={LazyLoad(() => import("@pages/Orders/Order"))()} />
          <Route path="cart" element={LazyLoad(() => import("@pages/Carts/Cart"))()} />
          <Route path="menu/:type" element={LazyLoad(() => import("@pages/Menus/Menu"))()}>
          </Route>
        </Routes>
      </div>

      <div className='footer-container'>
        <div className="footer-contents">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
