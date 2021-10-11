import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
  {
    url: 'images/AR.jpg'
  },
  {
    url: '/images/@ArtByHmna(2).png',
    caption: 'Slide 2'
  },
  {
    url: '../../utility/images/@ArtByHmna(3).png',
    caption: 'Slide 3'
  },
];

export default function SlideShow () {
    return (
      <div className="slide-container sm:pl-12 sm:pr-2 sm:mt-3">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide h-56 md:80" key={index}>
              <div>
                <img src={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"} alt="" />
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}