import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import useAuthCheck from '../UseAuth';
const Footer = () => {
  useAuthCheck()
  return (
    <div>
      <NavLink
      to="/footer"
      className="btn-numor flex justify-center items-center my-10 text-lg font-bold md:text-2xl gap-4 text-orange-500 w-full md:w-[70%]"
      >
        Your social media link
        <FaEdit className="text-xl md:text-3xl" />
      </NavLink>
    </div>
  );
};

export default Footer;