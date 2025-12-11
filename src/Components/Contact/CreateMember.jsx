import React,{useState} from 'react';
import api from '../../Api';

const CreateMember = () => {
  const [aboutContact,setAboutContact] = useState("");
  const [image,setImage] = useState("");
  const [phone,setPhone] = useState("");
  const [wat,setWat] = useState("");
  const [title,setTitle] = useState("");
  
  
  const submitHandler = async (e)=>{
      e.preventDefault();
      await api.post(`/info/contact/add`,{
        image,
        title,
        desc:aboutContact,
        whatsApp:wat,
        phone
      })
      alert("Member create Successfully")
    }
  return (
    <div className="mb-20">
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">Add Member</h2>
          <button type="submit" className="btn-numor">Save</button>
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2"> 
          Image
           </p>
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
          className="text-lg md:text-2xl font-bold mb-2"> 
          Title
           </p>
          <input
          type="text"
          placeholder="write your title"
          className="input-numor"
          onChange={(e)=> setTitle(e.target.value)} 
          value={title}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2">
            About Contact</p>
          <textarea 
          type="text"
          placeholder='write message'
          className="input-numor h-50"
          onChange={(e)=> setAboutContact(e.target.value)} 
          value={aboutContact}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2">
           Phone Number</p>
          <input
          type="number"
          placeholder="Your Number"
          className="input-numor"
          onChange={(e)=> setPhone(e.target.value)} 
          value={phone}
          />
        </div>
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2">
           WhatsApp Number</p>
          <input
          type="number"
          placeholder="Your WhatsApp Number"
          className="input-numor"
          onChange={(e)=> setWat(e.target.value)} 
          value={wat}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateMember;