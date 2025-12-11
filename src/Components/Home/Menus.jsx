import React from 'react';
import {NavLink} from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";

const Menu = ({menus}) => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="py-4 text-2xl md:text-3xl font-bold">Menu</h1>
        <NavLink
        to="/menu/create"
        className="btn-numor flex justify-center items-center gap-1 text-orange-500">Add New <IoMdAdd className="text-2xl md:text-3xl"/> </NavLink
        >
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 5 gap-4 md:gap-8">
        {menus && menus.map(item => (
        <NavLink
        to={`/menu/${item._id}/${item.name}`}
        key={item._id}
        className="navBox"
        >
         {item.image && (
         <img src={item.image} alt=""
          className="w-full rounded-2xl"
          />)}
          <h2 className="text-lg md:text-xl font-bold text-orange-500">{item?.price || ""}</h2>
          <p className="text-md md:text-xl text-center">{item?.name || ""}</p>
        </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;