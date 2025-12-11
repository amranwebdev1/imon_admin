import React from 'react';
import {NavLink} from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";
import {
  chomocha,
  bora,
  chana,
  fucka,
  cotpoti,
  ruti,
  puri} from '../../assets';
const Product = ({products}) => {
  
  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="py-4 text-2xl md:text-3xl font-bold">Product Info</h1>
        <NavLink
        to="/product/create"
        className="btn-numor flex justify-center items-center gap-1 text-orange-500">Add New <IoMdAdd className="text-2xl md:text-3xl"/> </NavLink
        
        >
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 5 gap-4 md:gap-8">
        {products && products.map(item => (
        <NavLink
        to={`/product/${item._id}/${item.title}_info`}
        key={item._id}
        className="navBox gap-2"
        >
          {item.image && (
          <img src={item.image} alt=""
          className="w-full rounded-2xl"
          />)}
          <p className="text-md md:text-xl font-bold">{item?.title || ""}</p>
        </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Product;
