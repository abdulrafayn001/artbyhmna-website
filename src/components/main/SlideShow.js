import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useStore } from "../../store";


export default function SlideShow () {
    const sliderImages = useStore((state) => state.sliderImages )
    return (
      <div className="slide-container sm:pl-12 sm:pr-2 sm:mt-3">
        <Slide>
         {sliderImages.map((slideImage, index)=> (
            <div className="each-slide h-56 md:80" key={index}>
              <div>
                <img src={slideImage.url} alt="" className="ml-auto mr-auto" />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
