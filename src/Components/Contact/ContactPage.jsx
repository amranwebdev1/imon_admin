import React,{useState,useEffect} from 'react';
import api from '../../Api';
import {useParams} from 'react-router-dom'
const ContactPage = () => {
  const [aboutContact,setAboutContact] = useState("");
  const [image,setImage] = useState("");
  const [phone,setPhone] = useState("");
  const [wat,setWat] = useState("");
  const [title,setTitle] = useState("");
  //const [cleenName,setName] = useState("")
  const {id,name} = useParams()
  //load 
  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await api.get("/info");
        const item = res.data.data.contact.find(x => x._id === id);
        if(item){
          setImage(item.image);
          setAboutContact(item.desc);
          setPhone(item.phone);
          setWat(item.whatsApp);
          setTitle(item.title)
        }
      }
      catch(err){
        console.log(err.message)
      }
    }
    load()
  },[])
  
  
  const submitHandler = async (e)=>{
      e.preventDefault();
      await api.put(`/info/contact/update/${id}`,{
        image,
        title,
        desc:aboutContact,
        whatsApp:wat,
        phone
      })
      alert("Update Successfully")
    }
    
  //name 

  return (
    <div className="mb-20">
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">{"cleenName"}</h2>
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

export default ContactPage;