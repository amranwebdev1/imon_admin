import React,{useState} from 'react';
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const FooterPage = () => {
  const [facebook,setFacebook] = useState("");
  const [tiktok,setTiktok] = useState("");
  const [youtub,setYoutub] = useState("");
  
  return (
    <div>
      <form>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">Edit Link</h2>
          <button className="btn-numor">Save</button>
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
      </form>
    </div>
  );
};

export default FooterPage;