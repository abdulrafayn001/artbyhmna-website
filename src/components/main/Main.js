import React from 'react'
import SlideShow from './SlideShow'
import Feedback from './feedback/Feedback'
import Categories from './categories/Categories'
export default function Main() {
    return (
        <div>
            <SlideShow/>
            <Categories/>
            <Feedback/>
        </div>
    )
}
