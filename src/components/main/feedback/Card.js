import React from 'react'

export default function Card(props) {
    return (
        <li id="pot" className={"px-3 md:px-4 flex-none w-96 transform hover:rotate-0 transition delay-150 duration-300 " + (props.index%2===0?"rotate-2":"-rotate-2")}>
            <blockquote className=" rounded-t-xl bg-green-light px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-grey-900">
                <i class="fas fa-quote-left fa-2x text-green-dark"></i>
                <p className="text-green-dark">{props.feedback}</p>
            </blockquote>
            <figcaption className="flex items-center space-x-4 p-6 md:px-10 md:py-6  bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-green to-green-dark">
                <div className="flex-none w-14 h-14 bg-green-light rounded-full flex items-center justify-center">
                    <img src={props.image} alt="Customer Profile" className="w-12 h-12 rounded-full bg-green-light-lightest" />
                </div>
                <div className="flex-auto">
                    <span className="text-green hover:text-green-dark cursor-default">{props.name}</span>
                </div>
                <a href={props.profile} target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-3x text-green-dark hover:text-green cursor-pointer"></i></a>
            </figcaption>
        </li>
    )
}
