import PropTypes from 'prop-types';

// const shoes = [
//     {
//         "brand":"jordan",
//         "price":5000,
//         "image":"./images/nike_1.png"
//     },
//     {
//         "brand":"nike",
//         "price":4000,
//         "image":"./images/nike_2.png"
//     },
//     {
//         "brand":"nike",
//         "price":6000,
//         "image":"./images/nike_5.png"
//     },
// ]
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

export default function AddToCart({addToCart}){

    return (
        <ul className="flex flex-col items-center wx-auto">
            {addToCart.map((shoe) => <List shoe = {shoe} key={shoe.image}/>)}
        </ul>
    )
}

function List({shoe}){
    return (
      <li className="flex w-2/4 border-b justify-around pt-3">
        <div>
           <img className="w-20 h-20" src={shoe.image}/> 
        </div>
        <div className="flex flex-col">
            <span>{shoe.brand}</span>
            <span>{shoe.price} Birr</span>
        </div>
        <button className="bg-color_btn border h-12 px-3">ORDER NOW</button>
      </li>
    )
}