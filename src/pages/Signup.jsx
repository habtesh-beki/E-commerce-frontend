import { useState } from "react";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export function Signup(){
  const { login } = useAuth();
  const navigate = useNavigate();
  const [success , setSuccess] = useState('')
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://e-commerce-backend-blue.vercel.app/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // prompt("you have signup successfully:")
         setSuccess('signup successfull')
         login(formData)
         navigate('/')
      } else {
        const message = data.message.split(":")[2]
        setError(message.trim());
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.log(error)
    }
   
  };
  
  return (
        <div className="flex h-4/5 w-full justify-center wx-auto items-center mt-14">
          <div className="flex flex-col bg-color_primary border h-4/6 w-3/12 p-2 border-2 rounded-xl">
            <div className="mb-6">
              <span className="text-2xl  text-color_btn">Well come to BW Shoes</span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col mb-4">
              <label>First Name</label>
              <input className="mb-3 h-10 outline-0"  
               type="text" 
               name="name" 
               value={formData.name} 
               onChange={handleChange} />
              <label>Email</label>
              <input className="mb-3 h-10 outline-0"  
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} />
              <label>Password</label>
              <input className="mb-3 h-10 outline-0"  
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} />
              <label>Confirm Password</label>
              <input className="mb-3 h-10 outline-0"  
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} />
              <button type="submit" className="bg-color_btn px-4 py-2 w-full">Sign up</button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
           {<p style={{ color: 'red' }} >{error}</p>}
          </div>
        </div>
    )
}