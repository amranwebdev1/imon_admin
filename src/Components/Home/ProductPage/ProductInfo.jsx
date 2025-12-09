import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
const ProductInfo = () => {
  const [image,setImage] = useState("");
  const [des,setDes] = useState("");
  const [name,setName] = useState("");
  const {title_info} = useParams()
  const cleenText = title_info.replace("_info","")
  return (
    <div>
      <form>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">{cleenText}</h2>
          <button className="btn-numor">Save</button>
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

export default ProductInfo;