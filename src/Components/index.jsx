import React,{useEffect,useState} from 'react';
import Menu from './Home/Menus';
import Product from './Home/Product';
import Footer from './Home/Footer';
import About from './About';
import Contact from './Contact';


import api from '../Api';
const Home = () => {
  const [info,setInfo] = useState(null)
  //1 check login
  useEffect(()=>{
    const tokenHandl = async ()=>{
      try{
      const token = localStorage.getItem("token");
      if(!token)return console.log("your token is not valid")
      
      const res = await api.get("/user/pro",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
    }
    tokenHandl()
  },[])
  
  //2 get info
  useEffect(()=>{
    const loadInfo = async ()=>{
      try{
        const res = await api.get("/info");
        setInfo(res.data.data)
      }catch(err){
        console.log(err.message)
      }
    }
    loadInfo()
  },[])
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        <a 
        href="https://mojadar-restaurant.vercel.app/" target="_blank"
        className="text-blue-500">মজাদার রেস্টুরেন্ট  </a> 
         এডমিন প্যানেল
      </h2>
      <Menu menus={info?.menus || []}/>
      <Product products={info?.product || []}/>
      <Footer />
      <About />
      <Contact />
    </section>
  );
};

export default Home;