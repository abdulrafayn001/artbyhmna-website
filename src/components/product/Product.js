import React, { useEffect, useState }from "react";
import SliderImage from 'react-zoom-slider';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Footer from "../footer/Footer";
export default function Product() {
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [cost, setCost] = useState(0);
  const increment = () => { setCount(count+1); }
  const decrement = () => { count-1>=1 && setCount(count-1); }
  const history = useHistory()
  useEffect(() => {
    setCost(location.state.product.discount===0 ? location.state.product.price : (location.state.product.price - ((location.state.product.discount/100)*location.state.product.price)))
  },[count])
  if(location.state === undefined){
    history.replace('/')
  }
  return (
    <>
    <div className="sm:flex justify-center p-3 w-fit bg-green-light">
      <div className="w-fit sm:w-1/2 ml-10">
          <SliderImage
            data={location.state.images}
            width="80%"
            direction="left"
          />
      </div>
      <div className="sm:w-1/2 p-3 mt-auto mb-auto  ">
          <span className="text-2xl	">{location.state.product.product}</span>
          <div className="">
            <span className="text-2xl font-semibold text-3xl">Rs. {location.state.product.discount===0 ? location.state.product.price : location.state.product.price - ((location.state.product.discount/100)*location.state.product.price)}</span>
            {location.state.product.discount != 0 && (<span className="text-sm line-through text-gray-500">Rs. {location.state.product.price}</span>) }
            {location.state.product.discount != 0 && (<span className="text-sm text-red-700">{location.state.product.discount}% off</span>) }
          </div>
          <div className="">

            <div class="inline-flex py-5">
            <h6 className="mr-5 mt-2">Quantity </h6>
              <button class="bg-green-dark hover:bg-gray-400 text-green text-lg font-bold py-2 px-4 rounded-l" onClick={increment}>
                +
              </button>
              <input type="number" class="w-20 text-center" value={count}></input>
              <button class="bg-green-dark hover:bg-gray-400 text-green text-lg font-bold py-2 px-4 rounded-r" onClick={decrement}>
                -
              </button>
            </div>
            <div className="mb-3">
              You will pay ₨. {count < 3 ? cost*count : (cost*count)-50}.00 Buy 3 and save ₨ 50.00
            </div>
            <div>
              <h1 className="text-3xl">
                <b>Details</b>
              </h1>
              <BrowserView>
                <pre className="text-sm py-3 ">
                  {location.state.product.description}
                </pre>
              </BrowserView>
              <MobileView>
                <p className="text-sm py-3 ">
                  {location.state.product.description}
                </p>
              </MobileView>
            </div>
            <div>
            <button class=' transition duration-300 bg-green hover:bg-green-dark hover:text-green-light text-white p-6 rounded text-2xl font-bold overflow-visible'>ADD TO CART</button>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}

