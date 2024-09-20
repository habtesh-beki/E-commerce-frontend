import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrival = [
    {
        Brand:"Air Jordan 4",
        image:"jordan4.png"
    },
    {
        Brand:"adidas",
        image:"./adidas_1.png"
    },
    {
        Brand:"puma",
        image:"puma_3.jfif"
    },
    {
      Brand:"nike",
      image:"nike_5.png"
    }
]


export default function NewArrival(){
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
       <Slider {...settings}>
          {Arrival.map((arrive) => (
            <div className="bg-color_primary h-3/4  " key={arrive.image}>
             <div className="flex flex-row px-40 py-20 justify-center items-center gap-2">
                 <div className="w-1/2">
                <h3 className="text-4xl font-extrabold text-color_btn tracking-wider pb-3">New Arrival</h3>
                <h3 className="font-bold">{arrive.Brand}</h3>
                <h4>
                  With its bold silhouette, unique colorways, and association with
                  <br />
                  Michael Jordan&apos;s illustrious career, the Air Jordan 4 has
                </h4>
                <button className="w-40 h-10 bg-color_btn mt-7 hover:bg-color_hover">Buy Now</button>
              </div>
                <img className="w-96 h-96" src={`./images/${arrive.image}`} alt="New Arrival" />
             </div>
            </div>
          ))}
        </Slider>    
      );
}