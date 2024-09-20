// import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header({addToCart}){

    return (
     <header className="sticky top-0 flex justify-evenly py-7 z-10 bg-color_secondary border-b">
      <Link to="/"><img className="w-7 h-7 cursor-pointer" src="./images/menu.png"/></Link> 
       <h2>BW</h2>
       <div className="flex gap-2">
        <span className="absolute bg-color_notify h-6 w-6 rounded-full flex justify-center text-white top-1">{addToCart.length}</span>
        <Link to='/addtocart'><img className="w-7 h-7 cursor-pointer" src="./images/cart.png"/></Link> 
        <div className="ml-4 flex gap-4 text-color_btn text-xl">
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        </div>
       </div> 
       
     </header>
    )
} 