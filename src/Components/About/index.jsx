import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <NavLink
      to="/about"
      className="btn-numor flex justify-center items-center my-10 text-lg font-bold md:text-2xl gap-4 text-orange-500 w-full md:w-[70%]"
      >
        Edit your About Section
        <FaEdit className="text-xl md:text-3xl" />
      </NavLink>
    </div>
  );
};

export default About;