import React, { useState } from "react";
import "./AccordionGallery.css";

type GalleryImage = {
  src: string;
  alt: string;
};

interface CarouselGalleryProps {
  images: GalleryImage[];
}

const CarouselGallery: React.FC<CarouselGalleryProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  if (images.length === 0) return null;

  return (
    <div className="carousel-gallery">
      <button className="carousel-btn left" onClick={prev} aria-label="Previous image">
        &#8592;
      </button>
      <div className="carousel-image-wrapper">
        <img src={images[current].src} alt={images[current].alt} className="carousel-image" />
      </div>
      <button className="carousel-btn right" onClick={next} aria-label="Next image">
        &#8594;
      </button>
    </div>
  );
};

export default CarouselGallery;
