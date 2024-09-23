import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';


Header.propTypes = {
  addToCart: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string, 
      price: PropTypes.number,
      image: PropTypes.string,
    })
  )
};

export default function Header({addToCart}){
    
  const { user, logout } = useAuth();

    return (
     <header className="sticky top-0 flex justify-evenly py-7 z-10 bg-color_secondary border-b">
      <Link to="/"><img className="w-7 h-7 cursor-pointer" src="./images/menu.png"/></Link> 
       <h2>BW</h2>
       <div className="flex gap-2">
    {user ?  <><span className="absolute bg-color_notify h-6 w-6 rounded-full flex justify-center text-white top-1">{addToCart.length}</span>
        <Link to='/addtocart'><img className="w-7 h-7 cursor-pointer" src="./images/cart.png"/></Link> </> : ''}
        <div className="ml-4 flex gap-4 text-color_btn text-xl">
     { user ? <><img alt="profile" className="w-7 h-7 rounded-full" src='./images/images.png'/> 
              <button className="border-2 border-color_btn" onClick={logout}>Logout</button> 
              </> : 
          <><Link to="/login">login</Link>
          <Link to="/signup">signup</Link></> }
        </div>
       </div> 
       
     </header>
    )
} 