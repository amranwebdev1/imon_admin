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
const Product = () => {
  const menuItems = [
    {id:1,title:"shinggara",img:puri},
    {id:2,title:"chomoca",img:puri},
    {id:3,title:"shinggara",img:puri},
    {id:4,title:"shinggara",img:puri},
    {id:5,title:"shinggara",img:puri},
    {id:6,title:"shinggara",img:puri},
    {id:7,title:"shinggara",img:puri},
    {id:8,title:"shinggara",img:puri},
    ];
  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="py-4 text-2xl md:text-3xl font-bold">Product Info</h1>
        <button className="btn-numor flex justify-center items-center gap-1 text-orange-500">Add New <IoMdAdd className="text-2xl md:text-3xl"/> </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 5 gap-4 md:gap-8">
        {menuItems.map(item => (
        <NavLink
        to={`/product/${item.title}_info`}
        key={item.id}
        className="navBox gap-2"
        >
          <img src={item.img} alt="img"
          className="w-full rounded-2xl"
          />
          <p className="text-md md:text-xl font-bold">{item.title}</p>
        </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Product;
