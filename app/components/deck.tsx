import { useState } from "react";

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  return (
    <div>
      {slides.map((slide, index) => (
        <Slide key={index} slide={slide} />
      ))}
    </div>
  );
}