import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");




  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successful, Login to continue");
    } else {
      alert("Registration Failed, try a different username");
    }
  };

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
        <h1 className="text-3xl text-center p">Sign Up</h1>
        <form className="flex flex-col  px-3 py-5" onSubmit={register} id="Signup-form">
          <input
            className="my-2 rounded-2xl p-2 text-xl text-white bg-transparent border "
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <input
            className="my-2 rounded-2xl p-2 text-xl  text-white bg-transparent border"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button
            className="my-2 bg-white text-slate-700 rounded-lg p-1"
            type="submit"
          >
            Create Account
          </button>
          <div className="flex justify-center items-center gap-2 sm:gap-3 ">
          <span>Account exists?</span>
          <Link to="/" className="text-slate-300">
            Login
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
