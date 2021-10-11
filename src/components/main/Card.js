import React from 'react'

export default function Card(props) {
    return (
        <div class=" w-40 h-54 shadow-lg sm:w-52 sm:h-80 hover:bg-green-light rounded-lg border-green-dark mb-3 cursor-pointer">
            <img class="w-52 h-44 rounded-t-lg text-green-dark" src={props.image} alt={props.name}/>
            <div class="sm:px-6 sm:py-4 px-2 py-1">
                <div class="font-bold text-sm mb-1 text-green-dark">Rs. {props.price}</div>
                <p class="text-gray-700 text-base">
                {props.name}
                </p>
            </div>
            <hr className=" mb-1 sm:mb-3 text-green-dark"/>
            <div class="flex">
                <div className="flex-auto"><span className="ml-2 sm:block hidden"> {props.rating}/5</span>
                </div>
                <button type="submit" className="mr-2 mb-2 mt-3 bg-transparent text-sm sm:font-semibold hover:text-green-lightest border border-green-dark text-green-dark hover:bg-green-dark rounded px-2">ADD TO CART</button>
            </div>
        </div>
    )
}
