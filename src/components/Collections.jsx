import PropTypes from 'prop-types';
import { useState } from "react";

const shoes = [
    {
        "brand":"jordan",
        "price":5000,
        "image":"./images/nike_1.png"
    },
    {
        "brand":"nike",
        "price":4000,
        "image":"./images/nike_2.png"
    },
    {
        "brand":"nike",
        "price":6000,
        "image":"./images/nike_5.png"
    },
    {
        "brand":"nike",
        "price":7000,
        "image":"./images/nike_4.jfif"
    },
    {
        "brand":"nike",
        "price":3400,
        "image":"./images/jordan_2.jfif"
    },
    {
        "brand":"adidas",
        "price":6000,
        "image":"./images/adidas_1.png"
    },
    {
        "brand":"adidas",
        "price":4000,
        "image":"./images/adidas_2.jfif"
    },
    {
        "brand":"nike",
        "price":6900,
        "image":"./images/nike_6.jfif"
    },
    {
        "brand":"puma",
        "price":3400,
        "image":"./images/puma_1.jfif"
    },
    {
        "brand":"puma",
        "price":6900,
        "image":"./images/puma_2.jfif"
    },
    {
        "brand":"puma",
        "price":4900,
        "image":"./images/puma_3.jfif"
    }
]

Collection.propTypes = {
    onAddToCart: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string, 
        price: PropTypes.number,
        image: PropTypes.string,
      })
    )
  };
List.propTypes = {
    onAddToCart: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string, 
        price: PropTypes.number,
        image: PropTypes.string,
      })
    ),
  shoe:PropTypes.arrayOf(
        PropTypes.shape({
          brand: PropTypes.string, 
          price: PropTypes.number,
          image: PropTypes.string,
        })
      )
  };


export default function Collection({onAddToCart}){
    const [filteredItems, setFilteredItems] = useState(shoes);
    const [selectedOption, setSelectedOption] = useState('');

    const [isOpen , setIsOpen] = useState(false);
    
    function handleMore(){
        setIsOpen((open) => !open)
    }
    
    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        console.log(value);
    
       
        if (value === "") {
          setFilteredItems(shoes);
        } else {
          const filtered = shoes.filter((item) => item.brand.toLowerCase() === value.toLowerCase());
          setFilteredItems(filtered);
        }
      };
    
      const displayedShoes = isOpen ? filteredItems : filteredItems.slice(0, 4);

    return (
        <div className="pt-16">
            <div className="flex flex-col items-center justify-center">
                 <h1 className="text-3xl">Our Collections</h1>
                 <h3 className="w-1/2 text-lg">Choose from top brands and exclusive designs that cater to every taste, ensuring that you walk with confidence wherever you go. With a variety of sizes, colors, and styles, finding the perfect</h3>
            </div>
            <div className="flex justify-between w-2/3 items-center mx-auto pt-10">
                <div className="flex gap-2">
                    <img className="w-6 h-6" src="./images/filter.png"/>
                    <span>Filter</span>   
                </div>
                <select className="border-2 w-40 h-10" value={selectedOption} onChange={handleOptionChange}>
                    <option value="" >All</option>
                    <option value="nike" >Nike</option>
                    <option value="adidas" >Adidas</option>
                    <option value="puma" >Puma</option>
                    <option value="jordan" >Jordan</option>
                </select>
            </div>
            <div className="grid grid-cols-4 w-2/3  mx-auto mt-10 mb-10"> {displayedShoes.map(shoe => <List shoe = {shoe} onAddToCart = {onAddToCart} key={shoe.image}/>)} </div> 
            <div className="mb-6">
           <button className="block mx-auto font-bold text-xl border p-2 rounded-lg" onClick={handleMore}>{isOpen ? 'show less' : 'show more ...'} </button>
        </div>

        </div>
    )
}

function List({shoe , onAddToCart}){
    return (
      <div className={`border`}>
        <img className="w-60 h-60" src={shoe.image} alt={shoe.brand}/>
        <div className="flex justify-between p-2">
            <span className="">{shoe.brand}</span>
            <span className="">{shoe.price} birr</span> 
        </div>
        <button className="bg-color_btn p-2" onClick={() => onAddToCart(shoe)}>ADD TO CART</button>
      </div>
    )
}