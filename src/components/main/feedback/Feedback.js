import React from 'react'
import Card from './Card'
export default function Feedback() {
    return (
        <ul className=" flex items-center w-full py-8 overflow-hidden">
            <Card image={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"} name={"Ali Raza"} feedback={"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."} index={1}/>
            <Card image={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"} name={"Kamran Akmal"} feedback={"Life isn't about finding yourself. Life is about creating yourself." } index={2}/>
            <Card image={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"} name={"Hassan Raza"} feedback={"We don't stop playing because we grow old; we grow old because we stop playing."} index={3}/>
            <Card image={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"} name={"Noman Khan"} feedback={"Faith is to believe what you do not see; the reward of this faith is to see what you believe."} index={4}/>
            <Card image={"https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"} name={"Bilal Saleem"} feedback={"Faith is the bird that feels the light when the dawn is still dark."} index={5}/>
        </ul>
    )
}
