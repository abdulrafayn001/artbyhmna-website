import React from 'react'
import { useHistory } from "react-router-dom";
import { useStore } from '../../store';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

export default function Card(props) {
  const history = useHistory();
  const cart = useStore((state)=> state.cart)
  const setCart = useStore((state)=> state.setCart)

    const goToProduct = event => {
        let images = []
        props.product.images.forEach(img => {
        images = [...images, {image: img.url}]
        });
        history.push({
           pathname: '/product',
           state: {images: images, product: props.product},
       });
    };

    const addToCart = (product) => {
        if(cart.length ===0 || cart.filter(p => p.description === product.description).length === 0) {
            console.log({...product, quantity: 1})
            setCart([{...product, quantity: 1}])
        }
    }

    return (
        <div className="w-72 bg-white drop-shadow-md rounded-lg mb-4 hover:shadow-lg">
            {/* <PreloadImage
                src={props.image}
                lazy
                /> */}

                {/* <LazyLoadImage
                        // key={pprops.image.key}
                        // scrollPosition={scrollPosition}
                        src={props.image}/> */}
            <img className="object-cover rounded-tl-lg rounded-tr-lg cursor-pointer" src={props.image} alt={props.name} onClick={goToProduct} />
            <div className="px-5 py-3 space-y-2 border border-green border-t-0 h-56 relative">
                <h3 className="text-lg">{props.name}</h3>
                <div className="absolute bottom-8 w-60	">
                    <div className="space-x-2">
                        <span data-tooltip-target="tooltip-cod" className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500 cursor-default" title="Cash on Delivery">COD</span>
                        <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500 cursor-default">7 Day Return</span>
                    </div><div id="tooltip-cod" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                            Cash on Delivery
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    <p className="space-x-2">
                        <span className="text-2xl font-semibold">Rs. {props.discount===0 ? props.price : props.price - ((props.discount/100)*props.price)}</span>
                        {props.discount != 0 && (<span className="text-sm line-through text-gray-500">Rs. {props.price}</span>) }
                        {props.discount != 0 && (<span className="text-sm text-red-700">{props.discount}% off</span>) }
                    </p>
                    <div className="flex justify-between items-center pt-3 pb-2">
                        <button className='px-4 py-2 bg-green hover:bg-green-dark hover:text-green-lightest text-center text-sm text-white rounded duration-300' onClick={()=>{addToCart(props.product)}}>Add to Cart</button>
                        <span className="text-2xl text-gray-300 hover:text-red-500 duration-300">&hearts;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
