import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

const Login = () => {
  const navigate =useNavigate();
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  

  const login= async (ev)=>{
      ev.preventDefault();
     const response= await fetch('http://localhost:4000/login',{
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials:'include',
      });
      if(response.ok){
        navigate("/Successful");
      } 
      else{
        alert('Wrong Credentials, please try again')
      }
  }


  return (
    <div
      className="flex justify-center items-center text-center h-screen"
      style={{
        backgroundImage: "url(hero3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" text-white h-1/2  w-4/5 max-w-lg px-4 py-6 rounded-2xl bg-transparent backdrop-blur-xl flex flex-col justify-center border-[1px] border-gray-400 shadow-xl">
        <h1 className="text-3xl text-center p">Log In</h1>
        <form className="flex flex-col  px-3 py-5" onSubmit={login} id="login-form">
          <input
            className="my-2 rounded-2xl p-2 text-xl text-white bg-transparent border "
            type="tex00t"
            placeholder="Username"
            name='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          ></input>
          <input
            className="my-2 rounded-2xl p-2 text-xl  text-white bg-transparent border"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          ></input>
          <button
            className="my-2 bg-white text-slate-700 rounded-lg p-1"
            type="submit"
          >
            Login
          </button>
          <div className="flex justify-center items-center gap-2 sm:gap-3 ">
            <span>New User ?</span>
           <Link to="/Signup" className="text-slate-300"> Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
