import React, {useEffect} from "react";
import SlideShow from "./SlideShow";
import Feedback from "./feedback/Feedback";
import Categories from "./categories/Categories";
import Card from "./Card";
import Footer from "../footer/Footer";
import { useStore } from "./../../store";

export default function Main() {
  const products = useStore((state)=> state.products)
  const setSelectedPtoducts = useStore((state)=> state.setSelectedPtoducts)
  const selectedPtoducts = useStore((state)=> state.selectedPtoducts)

  useEffect(()=> {
    setSelectedPtoducts(products)
  },[products])

  useEffect(()=> {

  },[selectedPtoducts])

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div>
      <SlideShow />
      <Categories />
      <Feedback />
      <div className="flex justify-evenly flex-wrap">
        {
          selectedPtoducts.map((product, index) => {
            return (
              <Card
                key={index}
                image={
                  product.images[randomNumberInRange(0,product.images.length-1)].url
                }
                discount={product.discount}
                name={product.product}
                price={product.price}
                rating={product.rating}
                product={product}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}
