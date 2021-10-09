import React from 'react'
import CategoryButton from './CategoryButton'

export default function Categories() {
    return (
        <div className="flex flex-wrap justify-between flex-auto mr-12 ml-12 ">
            <CategoryButton category={"Canvas Painting"} logo={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"}/>
            <CategoryButton category={"Embroidary Shirts"} logo={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"}/>
            <CategoryButton category={"Embroidary Canvas"} logo={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"}/>
            <CategoryButton category={"Embroidary Hoops"} logo={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"}/>
        </div>
    )
}
