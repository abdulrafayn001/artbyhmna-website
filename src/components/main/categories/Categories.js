import React from 'react'
import CategoryButton from './CategoryButton'
import { useStore } from '../../../store'

export default function Categories({onClick}) {
    const categories = useStore((state)=> state.categories)
    const products = useStore((state)=> state.products)
    const setSelectedPtoducts = useStore((state)=> state.setSelectedPtoducts)

    const onClickCategoryButton = (category) => {
        setSelectedPtoducts(products.filter(product => product.category === category))
        onClick()
    };
    return (
        <div className="flex flex-wrap justify-between flex-auto mr-12 ml-12 ">
            {
                categories.map((category, index)=> {
                    return <CategoryButton key={index} category={category} onClick={()=>{onClickCategoryButton(category)}} />
                })
            }
        </div>
    )
}
