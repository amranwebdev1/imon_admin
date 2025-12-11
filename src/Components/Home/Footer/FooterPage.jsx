import React,{useState,useEffect} from 'react';
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import api from '../../../Api'
const FooterPage = () => {
  const [facebook,setFacebook] = useState("");
  const [tiktok,setTiktok] = useState("");
  const [whatsApp,setWhatsApp] = useState("");
  const [phone,setPhone] = useState("");
  const [youtub,setYoutub] = useState("");
  
  useEffect(()=>{
    const load = async ()=>{
      try{
        const res = await api.get("/info");
        if(res){
          const item = res.data.data;
          setFacebook(item.facebook);
          setTiktok(item.tiktok);
          setYoutub(item.youtub);
          setWhatsApp(item.whatsApp);
          setPhone(item.phone)
        }
        
      }catch(err){
        console.log(err.message)
      }
    }
    load()
  },[])
  const submitHandler = async (e)=>{
    try{
      e.preventDefault();
      await api.put("/info/update",{
        facebook,
        tiktok,
        youtub,
        whatsApp,
        phone
      })
      alert("update successfully")
    }catch(err){
      console.log(err.message)
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">Edit Link</h2>
          <button type="submit" className="btn-numor">Save</button>
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold flex justify-start items-center gap-2 md:gap-3 mb-2"> 
          <FaFacebook className="text-blue-500 text-xl md:text-2xl"/>
          Facebook</p>
          <input 
          type="text"
          placeholder="Facebook link"
          className="input-numor"
          onChange={(e)=> setFacebook(e.target.value)} 
          value={facebook}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold flex justify-start items-center gap-2 md:gap-3 mb-2">
            <FaTiktok className="text-xl md:text-2xl"/>
            TikTok</p>
          <input 
          type="text"
          placeholder="TikTok link"
          className="input-numor"
          onChange={(e)=> setTiktok(e.target.value)} 
          value={tiktok}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold flex justify-start items-center gap-2 md:gap-3 mb-2">
            <IoLogoYoutube className="text-xl md:text-2xl text-red-500"/>
          Youtub</p>
          <input 
          type="text"
          placeholder="Youtub link"
          className="input-numor"
          onChange={(e)=> setYoutub(e.target.value)} 
          value={youtub}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold flex justify-start items-center gap-2 md:gap-3 mb-2">
            <IoLogoWhatsapp  className="text-xl md:text-2xl text-green-500"/>
          WhatsApp Number</p>
          <input 
          type="text"
          placeholder="WhatsApp Number"
          className="input-numor"
          onChange={(e)=> setWhatsApp(e.target.value)} 
          value={whatsApp}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold flex justify-start items-center gap-2 md:gap-3 mb-2">
            <FaPhoneVolume className="text-xl md:text-2xl text-red-500"/>
          Phone number</p>
          <input 
          type="text"
          placeholder="PhonebNumber"
          className="input-numor"
          onChange={(e)=> setPhone(e.target.value)} 
          value={phone}
          />
        </div>
      </form>
    </div>
  );
};

export default FooterPage;