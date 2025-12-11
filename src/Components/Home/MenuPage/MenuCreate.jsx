import React,{useState,useEffect} from 'react';

import api from '../../../Api';
const MenuCreate = () => {
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");
  const [name,setName] = useState("");
  
  
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      await api.post(`/info/menu/add`,{
        image,
        price,
        name
      })
      alert("Menu Create Successfully")
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">Add Menu</h2>
          <button type="submit" className="btn-numor">Save</button>
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold">Image</p>
          <input 
          type="text"
          placeholder="Image url"
          className="input-numor"
          onChange={(e)=> setImage(e.target.value)} 
          value={image}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold">Price</p>
          <input 
          type="text"
          placeholder="Product Price"
          className="input-numor"
          onChange={(e)=> setPrice(e.target.value)} 
          value={price}
          />
        </div>
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold">Product Name</p>
          <input 
          type="text"
          placeholder="Product Name"
          className="input-numor"
          onChange={(e)=> setName(e.target.value)} 
          value={name}
          />
        </div>
      </form>
    </div>
  );
};

export default MenuCreate;