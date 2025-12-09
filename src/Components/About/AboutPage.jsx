import React,{useState} from 'react';

const AboutPage = () => {
  const [aboutUs,setAboutUs] = useState("");
  const [image,setImage] = useState("");
  const [bio,setBio] = useState("");
  const [caption,setCaption] = useState("")
  
  return (
    <div>
      <form>
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl font-bold text-orange-500 md:text-3xl">আমাদের সম্পর্কে</h2>
          <button className="btn-numor">Save</button>
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2"> 
           আমাদের সম্পর্কে</p>
          <textarea
          type="text"
          placeholder="আমাদের সম্পর্কে"
          className="input-numor h-50"
          onChange={(e)=> setAboutUs(e.target.value)} 
          value={aboutUs}
          />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-orange-500 my-5">majonerbjiboni</h2>
        <hr/>
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2">
            Image</p>
          <input 
          type="text"
          placeholder='Image url..'
          className="input-numor"
          onChange={(e)=> setImage(e.target.value)} 
          value={image}
          />
        </div>
        
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2">
           Bio</p>
          <textarea
          type="text"
          placeholder="Your Bio...."
          className="input-numor h-50"
          onChange={(e)=> setBio(e.target.value)} 
          value={bio}
          />
        </div>
        <div className="mb-6 md:mb-10">
          <p 
          className="text-lg md:text-2xl font-bold mb-2">
           caption</p>
          <input
          type="text"
          placeholder="Any caption"
          className="input-numor"
          onChange={(e)=> setCaption(e.target.value)} 
          value={caption}
          />
        </div>
      </form>
    </div>
  );
};

export default AboutPage;