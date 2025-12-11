import React,{useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import api from '../../Api';

import useAuthCheck from '../UseAuth';
const ImonContact = () => {
  const [contactItem,setContactItem] = useState(null);
  const [deleteId,setDleteId] = useState("");
  useAuthCheck()
  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await api.get("/info");
        if(res){
          const item = res.data.data.contact;
          setContactItem(item)
        }
      }
      catch(err){
        console.log(err.message)
      }
    }
    load()
  },[])
  // contact delete 
  useEffect(() => {
  if (!deleteId) return;

  const deleteContact = async () => {
    try {
      await api.delete(`/info/contact/delete/${deleteId}`);

      // UI সাথে সাথে আপডেট
      setContactItem(prev =>
        prev.filter(item => item._id !== deleteId)
      );

      alert("Deleted Successfully!");

    } catch (err) {
      console.log(err.message);
    }
  };

  deleteContact();
}, [deleteId]);
  return (
    <div className="pb-20">
    <div className="flex justify-between items-center">
      <h1 className="py-4 text-2xl md:text-3xl font-bold">Contact</h1>
      <NavLink
        to="/contact/create"
        className="btn-numor flex justify-center items-center gap-1 text-orange-500">Add Member <IoMdAdd className="text-2xl md:text-3xl"/> </NavLink
        >
    </div>
    {contactItem && contactItem.map(item => (
    <div key={item._id}>
      <button
      onClick={()=> setDleteId(item._id)}
      className="btn-numor flex inline-block text-2xl text-red-500 md:text-3xl">
        <RiDeleteBin6Line />
      </button>
      <NavLink
      to={`/contact/${item._id}/${item.title}`}
      className="btn-numor flex justify-center items-center mb-10 mt-3 text-lg font-bold md:text-2xl gap-4 text-orange-500 w-full md:w-[70%]"
      >
        Edit {item.title} Contact
        <FaEdit className="text-xl md:text-3xl" />
      </NavLink>
    </div>))}
    </div>
  );
};

export default ImonContact;