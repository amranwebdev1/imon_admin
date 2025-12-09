import React from 'react';
import Menu from './Home/Menus';
import Product from './Home/Product';
import Footer from './Home/Footer';
import About from './About';
import ImonContact from './Contact/Imon';
import RimonContact from './Contact/Rimon';

const Home = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold text-center">mojadar restauran er admin penel</h2>
      <Menu />
      <Product />
      <Footer />
      <About />
      <ImonContact />
      <RimonContact />
    </section>
  );
};

export default Home;