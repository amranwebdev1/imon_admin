import React,{useState,useEffect} from 'react';

import api from '../../../Api';
const ProductCreate = () => {
  const [image,setImage] = useState("");
  const [des,setDes] = useState("");
  const [name,setName] = useState("");
  
  //data put
  const submitHandler = async (e)=>{
    e.preventDefault();
    try{
      await api.post(`/info/product/add`,{
        image,
        title:name,
        desc:des
      })
      alert("Product Create Successfully")
    }catch(err){
      console.log(err.message)
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">Add Product</h2>
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
          className="text-lg md:text-2xl font-bold">Product Name</p>
          <input 
          type="text"
          placeholder="Product Name"
          className="input-numor"
          onChange={(e)=> setName(e.target.value)} 
          value={name}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold">Describtion</p>
          <textarea
          type="text"
          placeholder="Write Describtion...."
          className="input-numor h-70"
          onChange={(e)=> setDes(e.target.value)} 
          value={des}
          />
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;