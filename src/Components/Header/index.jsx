import React from 'react';
import {NavLink} from 'react-router-dom';
import { IoHome } from "react-icons/io5";
const Header = () => {
  return (
    <div className="py-4 md:py-6 grid grid-cols-1 md:grid-cols-2">
      <NavLink to="/" className="flex justify-between items-center">
        <h1 className="text-2xl font-bold md:text-4xl">মজাদার <span className="text-orange-500">রেস্টুরেন্ট</span></h1>
        <IoHome className="text-3xl md:text-5xl text-orange-500"/>
      </NavLink>
      <div></div>
    </div>
  );
};

export default Header;