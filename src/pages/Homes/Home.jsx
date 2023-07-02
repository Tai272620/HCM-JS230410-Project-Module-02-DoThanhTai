import React from 'react';
import Banner from './components/Banners/Banner';
import Category from './components/Categorys/Category';
import About from './components/Abouts/About';
import Cart from '../Carts/Cart';

export default function Home() {

  return (
    <div>
      <Banner />
      <Category />
      <About />
      {/* <Cart /> */}
    </div>
  )
}
