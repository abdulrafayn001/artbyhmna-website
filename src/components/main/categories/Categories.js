import React from 'react'
import CategoryButton from './CategoryButton'
import { useStore } from '../../../store'

export default function Categories() {
    const categories = useStore((state)=> state.categories)
    return (
        <div className="flex flex-wrap justify-between flex-auto mr-12 ml-12 ">
            {
                categories.map((category, index)=> {
                    return <CategoryButton key={index} category={category} />
                })
            }
        </div>
    )
}
