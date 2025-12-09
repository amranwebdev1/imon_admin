import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Components';
import ProductInfo from './Components/Home/ProductPage/ProductInfo';
import MenuInfo from './Components/Home/MenuPage';
import FooterPage from './Components/Home/Footer/FooterPage';

import AboutPage from './Components/About/AboutPage';
import ImonContactPage from './Components/Contact/Imon/ContactPage';
import RimonContactPage from './Components/Contact/Rimon/ContactPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {/*menu info*/}
      <Route path="/menu/:menuInfo" element={<MenuInfo /> }/>
      {/*product info*/}
      <Route path="/product/:title_info" element={<ProductInfo />}/>
      {/*footer*/}
      <Route path="/footer" element={<FooterPage />}/>
      {/*About section*/}
      <Route path="/about" element={<AboutPage />}/>
      {/*Contact */}
      <Route path="/imon_contact" element={<ImonContactPage />}/>
      <Route path="/rimon_contact" element={<RimonContactPage />}/>
    </Routes>
  );
};
export default Router;
