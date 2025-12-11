import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Components';
import ProductInfo from './Components/Home/ProductPage/ProductInfo';
import ProductCreate from './Components/Home/ProductPage/ProductCreate';
import MenuInfo from './Components/Home/MenuPage';
import MenuCreate from './Components/Home/MenuPage/MenuCreate';
import FooterPage from './Components/Home/Footer/FooterPage';

import AboutPage from './Components/About/AboutPage';
import ContactPage from './Components/Contact/ContactPage';
import CreateMember from './Components/Contact/CreateMember';

import Login from './Components/Login';
import ProtectRoute from './Components/ProtectRoute';
const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      
      <Route path="/" element={
      <ProtectRoute>
        <Home />
      </ProtectRoute>
      }/>
      {/*menu info*/}
      <Route path="/menu/:id/:menuTitle" element={
      <ProtectRoute>
        <MenuInfo /> 
      </ProtectRoute>
      }/>
      {/*menu create*/}
      <Route path="/menu/create" element={
      <ProtectRoute>
        <MenuCreate /> 
      </ProtectRoute>
      }/>
      {/*product info*/}
      <Route path="/product/:id/:productTitle" element={
      <ProtectRoute> 
        <ProductInfo />
      </ProtectRoute>
      }/>
      {/*product create*/}
      <Route path="/product/create" element={
      <ProtectRoute> 
        <ProductCreate />
      </ProtectRoute>
      }/>
      {/*footer*/}
      <Route path="/footer" element={
      <ProtectRoute> 
        <FooterPage />
      </ProtectRoute>
      }/>
      {/*About section*/}
      <Route path="/about" element={
      <ProtectRoute> 
        <AboutPage />
      </ProtectRoute>
      }/>
      {/*Contact */}
      <Route path="/contact/:id/:name" element={
      <ProtectRoute> 
        <ContactPage />
      </ProtectRoute>
      }/>
      {/*Create Contact */}
      <Route path="/contact/create" element={
      <ProtectRoute> 
        <CreateMember />
      </ProtectRoute>
      }/>
      
    </Routes>
  );
};
export default Router;
