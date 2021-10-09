import React from 'react'
import RighrArrow from '../../../utility/svg/rightArrow.svg'
export default function CategoryButton(props) {
    return (
        <div className="h-10 w-72 md:w-96 bg-green-light rounded-3xl hover:bg-green cursor-pointer flex items-center md:mt-8 mt-2">
            <img src={props.logo} alt="Category Logo" className="rounded-full w-10 h-10 " />
            <div className="flex-auto">
                <span className="ml-3 text-green-dark font-semibold">{props.category}</span>
            </div>
            <img src={RighrArrow} alt="" className="h-6 w-6 pr-2" />
        </div>
    )
}
