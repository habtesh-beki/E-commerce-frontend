

export default function Footer(){

    return (
        <div className="flex justify-evenly pt-10 pb-10">
            <div>
                <span className="font-bold">Company</span>
                 <ul>
                   <li>About</li>
                   <li>Our Shoes</li>
                   <li>News</li>
                   <li>Delivery</li>
                 </ul>
            </div>
            <div>
                <span className="font-bold">Help</span>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Help</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div>
               <span className="font-bold">Get social</span>
               <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>twitter</li>
                <li>telegram</li>
               </ul>
            </div>
            <div>
               <span className="font-bold">Contact</span>
               <ul>
                <li>0945356423</li>
                <li>bwshoes@gmail.com</li>
               </ul>
            </div>
        </div>
    )
}