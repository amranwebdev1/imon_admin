import React,{useState} from 'react';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <section className="h-[100vh] flex justify-center items-center overflow-x-hidden bg-gray-100">
      <form
      className="px-6 py-10  rounded-3xl flex justify-center items-center flex-col gap-6 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff]">
          <h1 className="mb-2 text-3xl font-bold">Login Form</h1>
        <div>
        </div>
        <div>
          <p className="text-lg font-bold">Email</p>
          <input
          className="input-numor"
          type="email"
          placeholder="Your Email"
          onChange={(e)=> setEmail(e.target.value)} 
          value={email}
          />
        </div>
        <div>
          <p className="text-lg font-bold">Password</p>
          <input 
          className="input-numor"
          type="password"
          placeholder="Your Password"
          onChange={(e)=> setPassword(e.target.value)} 
          value={password}
          />
        </div>
        <div>
          <button className="btn-numor">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;