import React from 'react'
import Card from './Card'
import { useStore } from "../../../store";

export default function Feedback() {
    const feedbacks = useStore((state) => state.feedbacks )
    return (
        <ul className=" flex items-center w-full py-8 overflow-hidden">
            {feedbacks.map( (feedback, index) => {
                return <Card image={feedback.image} name={feedback.name} feedback={feedback.feedback} profile={feedback.profile} key={index}/>
            } )}
        </ul>
    )
}
