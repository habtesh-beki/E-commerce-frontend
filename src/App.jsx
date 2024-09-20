import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BestClassical from './components/BestClassical'
import Collection from './components/Collections'
import Copy from './components/CopyWrite'
import Footer from './components/Footer'
import Header from './components/Header'
import NewArrival from './components/NewArrival'
import Login from './pages/Login'
import {Signup} from './pages/Signup'
import AddToCart from './pages/AddToCart';
import { useState } from 'react';



function App() {
  const [addToCart , setAddToCart] = useState([])

 function handleAddToCart(shoe){
  if(!addToCart) return ;
  setAddToCart([...addToCart , shoe])
 }
console.log(addToCart)
  return (
    <Router>
      <div className='font-inria'>
        <Header addToCart = {addToCart}/>
        <Routes>
          <Route path="/" element={
            <>
              <NewArrival />
              <Collection onAddToCart = {handleAddToCart}/>
              <BestClassical />
              <Footer />
              <Copy />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/addtocart' element={<AddToCart addToCart = {addToCart}/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App
