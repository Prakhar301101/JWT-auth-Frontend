import { useEffect,useState } from "react";
import Cookies from "js-cookie";

const Successful = () => {


    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchUserProfile() {
        try {
          const token = Cookies.get("token"); // Get the token from the cookie
          const response = await fetch("http://localhost:4000/profile", {
            headers: {
              Authorization: `Bearer ${token}`, // Add the token to the Authorization header
            },
          });
  
          const data = await response.json();
          console.log(data)
          setUserData(data);
        setIsLoading(false);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setIsLoading(false);
        }
      }
  
      fetchUserProfile();
    }, []);

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
      <div className=" text-white h-1/3 w-4/5 max-w-lg px-4 py-6 rounded-2xl bg-transparent backdrop-blur-xl flex flex-col justify-center border-[1px] border-gray-400 shadow-xl">
        {isLoading?<h1>Please wait</h1>:<div>
        <h1 className="text-2xl p-3">Login Successful</h1>
        <p className="p-2 text-lg">Welcome {userData.username}, your authentication was successful</p>
      </div>}
      </div>
    </div>
  );
    }

export default Successful;
