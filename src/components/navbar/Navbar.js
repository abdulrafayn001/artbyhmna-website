import React,{useState} from 'react';
import logo from '../../utility/svg/logo.svg'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
    const history=useHistory();
    const [isOpen,setIsOpen] = useState(false);
    const [selectedButton,setSelectedButton] = useState(0);
    const toggle = () => setIsOpen(!isOpen);

    const buttonStyle="flex w-1/4 justify-center h-full hover:text-green-light hover:bg-green-dark rounded-br-full rounded-bl-full items-center cursor-pointer"
    const buttonStyleOnClick="flex w-1/4 justify-center h-full text-green-light bg-green-dark rounded-br-full rounded-bl-full items-center cursor-pointer"
    console.log(selectedButton,"SELECTED BUTTON")
    const btnStyleMobile="h-12 pr-5 pl-8 bg-green-dark text-green-lightest cursor-pointer flex items-center hover:bg-green hover:text-green-dark"
    const btnStyleMobileOnClick = "h-12 pr-5 pl-8 bg-green text-green-dark cursor-pointer flex items-center"
    return (
        <nav className="bg-green-dark">
            <div className="hidden sm:contents">
                <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8 h-20">
                    <div className="w-3/12 justify-start">
                        <img className="block mx-16 h-16 rounded-full sm:mx-0 sm:flex-shrink-0 cursor-pointer" src={logo} alt="artbyhmna logo" title="ArtByHmna" onClick={()=>{history.replace('/'); setSelectedButton(0);}} />
                    </div>
                    <div>
                        <div className="relative"> <input type="text" className="h-14 w-96 pr-8 pl-5 z-0 focus:shadow focus:outline-none rounded-xl hover:bg-green-lightest bg-green-light focus:bg-green-lightest text-green-dark" placeholder="Search anything..."/>
                            <div className="absolute top-4 right-3"> <i className="fa fa-search text-green-dark z-20 hover:text-gray-light cursor-pointer"></i> </div>
                        </div>
                    </div>
                    
                    <div className="w-3/12 flex flex-row-reverse">
                        <i className="fa fa-shopping-cart text-green-light hover:text-green-lightest fa-2x cursor-pointer" aria-hidden="true" onClick={()=>{setSelectedButton(5);history.replace('/cart')}}></i>
                    </div>
                </div>
            </div>
            <div className="sm:justify-center sm:px-6 h-10 hidden sm:flex sm:bg-green sm:text-green-dark">
                <div className={selectedButton===1?buttonStyleOnClick:buttonStyle} onClick={()=>{setSelectedButton(1); history.replace('/affiliate-program')}}>
                    AFFILIATE PROGRAM
                </div>
                
                <div className={selectedButton===2?buttonStyleOnClick:buttonStyle} onClick={()=>{setSelectedButton(2); history.replace('/track-order')}}>
                    TRACK MY ORDER
                </div>

                <div className={selectedButton===3?buttonStyleOnClick:buttonStyle} onClick={()=>{setSelectedButton(3); history.replace('/contact')}}>
                    CONTACT US
                </div>

                <div className={selectedButton===4?buttonStyleOnClick:buttonStyle} onClick={()=>{setSelectedButton(4); history.replace('/subscribe')}}>
                    SUBSCRIBE
                </div>
            </div>

            {/* Mobile */}
            <div className="sm:hidden">
                <div className="flex items-center px-4 sm:px-6 lg:px-8 h-20">
                    <div className="w-1/2 flex justify-items-start cursor-pointer">
                        <img className=" h-16 rounded-full sm:mx-0 " src={logo} alt="artbyhmna logo" onClick={()=>{setSelectedButton(0); history.replace('/')}} />
                    </div>
                    
                    <div className="w-1/2 flex flex-row-reverse" onClick={toggle}>
                        <i className="fa fa-bars text-green-light hover:text-green-lightest fa-2x cursor-pointer" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden flex flex-col justify-center">
                    <div className="relative"> <input type="text" className="h-14 w-full pr-8 pl-5 z-0 focus:shadow focus:outline-none hover:bg-green-lightest bg-green-light focus:bg-green-lightest text-green-dark" placeholder="Search anything..."/>
                        <div className="absolute top-4 right-3"> <i className="fa fa-search text-green-dark z-20 cursor-pointer"></i> </div>
                    </div>
                    <div className={selectedButton===1?btnStyleMobileOnClick:btnStyleMobile + " border-b border-green-light"} onClick={()=>{setSelectedButton(1); history.replace('/affiliate-program')}}>
                        <div className="w-3/4 text-2xl h-full items-center flex" >
                            <div>AFFILIATE PROGRAM</div>
                        </div>
                        <div className="w-1/4 flex flex-row-reverse">
                            <i class="fa fa-share" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className={selectedButton===2?btnStyleMobileOnClick:btnStyleMobile + " border-b border-green-light"} onClick={()=>{setSelectedButton(2);history.replace('/track-order')}}>
                        <div className="w-3/4 text-2xl h-full items-center flex">
                            <div>TRACK MY ORDER</div>
                        </div>
                        <div className="w-1/4 flex flex-row-reverse" >
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className={selectedButton===3?btnStyleMobileOnClick:btnStyleMobile + " border-b border-green-light"} onClick={()=>{setSelectedButton(3);history.replace('/contact')}}>
                        <div className="w-3/4 text-2xl h-full items-center flex" >
                            <div>CONTACT US</div>
                        </div>
                        <div className="w-1/4 flex flex-row-reverse">
                            <i class="fa fa-mobile" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className={selectedButton===4?btnStyleMobileOnClick:btnStyleMobile + " border-b border-green-light"} onClick={()=>{setSelectedButton(4); history.replace('/cart')}}>
                        <div className="w-3/4 text-2xl h-full items-center flex">
                            <div>SUBSCRIBE</div>
                        </div>
                        <div className="w-1/4 flex flex-row-reverse">
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className={selectedButton===5?btnStyleMobileOnClick:btnStyleMobile} onClick={()=>{setSelectedButton(5);history.replace('/cart')}}>
                        <div className="w-3/4 text-2xl h-full items-center flex">
                            <div>CART</div>
                        </div>
                        <div className="w-1/4 flex flex-row-reverse">
                            <i className="fa fa-shopping-cart " aria-hidden="true"></i>
                        </div>
                    </div>                
                </div>
            )}
            
        </nav>    
    )
}
