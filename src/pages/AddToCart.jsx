import { useState } from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
    shoe: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string, 
        price: PropTypes.number,
        image: PropTypes.string,
      })
    )
  };
  AddToCart.propTypes = {
    addToCart: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string, 
        price: PropTypes.number,
        image: PropTypes.string,
      })
    )
  };

  export default function AddToCart({ addToCart }) {
    return (
      <div className="flex flex-col items-center wx-auto">
        {addToCart.map((shoe) => (
          <List shoe={shoe} key={shoe.image} />
        ))}
      </div>
    );
  }
  
  function List({ shoe }) {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState(null);
    const [orderData, setOrderData] = useState({
      brand: shoe.brand,
      image: shoe.image,
      price: shoe.price,
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://127.0.0.1:3000/api/products/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
  
        const data = await response.json();
        if (response.ok) {
          setSuccess("Order successful");
        } else {
          const messageParts = data.message.split(":");
          const message =
            messageParts.length >= 3 ? messageParts[2].trim() : data.message;
          setError(message);
          console.log(data.message);
        }
      } catch (error) {
        setError("An unexpected error occurred");
        console.log(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex w-2/4 border-b justify-around pt-3">
        <div>
          <img className="w-20 h-20" src={shoe.image} alt={shoe.brand} />
        </div>
        <div className="flex flex-col">
          <span>{shoe.brand}</span>
          <span>{shoe.price} Birr</span>
        </div>
        <button type="submit" className="bg-color_btn border h-12 px-3">
          ORDER NOW
        </button>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    );
  }