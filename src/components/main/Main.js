import React from "react";
import SlideShow from "./SlideShow";
import Feedback from "./feedback/Feedback";
import Categories from "./categories/Categories";
import Card from "./Card";
import Footer from "../footer/Footer";
export default function Main() {
  return (
    <div>
      <SlideShow />
      <Categories />
      <Feedback />
      <div className="flex justify-evenly flex-wrap">
        <Card
          image={
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"
          }
          name={"Canvas Painting"}
          price={1200}
          rating={4.5}
        />
        <Card
          image={
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"
          }
          name={"Canvas Painting"}
          price={1200}
          rating={4.5}
        />
        <Card
          image={
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"
          }
          name={"Canvas Painting"}
          price={1200}
          rating={4.5}
        />
        <Card
          image={
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"
          }
          name={"Canvas Painting"}
          price={1200}
          rating={4.5}
        />
        <Card
          image={
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"
          }
          name={"Canvas Painting"}
          price={1200}
          rating={4.5}
        />
        <Card
          image={
            "https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png"
          }
          name={"Canvas Painting"}
          price={1200}
          rating={4.5}
        />
      </div>
      <Footer />
    </div>
  );
}
