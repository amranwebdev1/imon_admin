import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
const RimonContact = () => {
  return (
    <div>
      <NavLink
      to="/rimon_contact"
      className="btn-numor flex justify-center items-center my-10 text-lg font-bold md:text-2xl gap-4 text-orange-500 w-full md:w-[70%]"
      >
        Edit Rimon Contact
        <FaEdit className="text-xl md:text-3xl" />
      </NavLink>
    </div>
  );
};

export default RimonContact;