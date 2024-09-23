import { useState } from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const { login } = useAuth();
  const navigate = useNavigate();
  
   const [successs, setSuccess] = useState('')
  const [error, setError] = useState(null);
  const [logInData, setLogInData] = useState({
  email: '',
  password: '',
  });

  const handleChange = (e) => {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
     e.preventDefault();

    try {
      const response = await fetch('https://e-commerce-backend-iota-vert.vercel.app/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInData),
      });
      const data = await response.json();
      if (response.ok) {
        // prompt("you have signup successfully:")
        setSuccess("login successfull")
        login(logInData)
        navigate('/')
      } else {
        const messageParts = data.message.split(":");
         const message = messageParts.length >= 3 ? messageParts[2].trim() : data.message;
         setError(message);
        
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.log(error)
    }

    
  };

    return (
      <div className="flex h-3/5 w-full justify-center wx-auto items-center mt-16">
        <button className="absolute top-4 left-4 p-2 border bg-color_btn">Back</button>
        <form onSubmit={handleSubmit} className="flex flex-col bg-color_primary border h-3/6 w-1/5 p-2 border-2">
          <div>
            <h2 className=" text-2xl text-color_btn ">Well come to BW shoes</h2>
          </div>
           <div className="mt-12 flex flex-col">
            <span>Email</span>
             <input className="h-10 w-full mb-2 outline-0" 
              type="email" 
              name="email" 
              value={logInData.email} 
              onChange={handleChange}  />
             <span>Password</span>
             <input className="h-10 w-full outline-0"        
              type="password" 
              name="password" 
              value={logInData.password} 
              onChange={handleChange} />
           </div>
               <button type="submit"  className="border p-2 bg-color_btn mt-14">Login</button>
               {successs && <p style={{ color: 'green' }}>{successs}</p>}
               {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
       
    )
}