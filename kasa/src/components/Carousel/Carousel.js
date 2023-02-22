import "./Carousel.scss";
import { useState } from "react";
import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    const isFirstImage = currentImage === 0;
    const newImage = isFirstImage ? images.length - 1 : currentImage - 1; //si on est sur la premiere image, la fleche de gauche nous envoi vers la derniere image
    setCurrentImage(newImage);
  };
  const nextImage = () => {
    const isLastImage = currentImage === images.length - 1;
    const newImage = isLastImage ? 0 : currentImage + 1; //si on est sur la derniere image, la fleche de droite nous envoi vers la premieres image
    setCurrentImage(newImage);
  };

  const imagesForCarousel = {
    position: "relative",
    backgroundImage: `url(${images[currentImage]})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "15px",
  };

  return (
    <div className="carousel" style={imagesForCarousel}>
      <div
        className={images.length < 2 ? "single-image" : "leftArrow"}
        onClick={previousImage}
      >
        <img
          src={leftArrow}
          alt="Flèche de gauche"
          className="leftArrow-logo"
        />
      </div>
      <div
        className={images.length < 2 ? "single-image" : "rightArrow"}
        onClick={nextImage}
      >
        <img
          src={rightArrow}
          alt="Flèche de droite"
          className="rightArrow-logo"
        />
      </div>
      <div className="carousel-counter">
        <p>
          {currentImage + 1}/{images.length}
        </p>
      </div>
      <div className="carousel-background"></div>
    </div>
  );
}

export default Carousel;
