import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image_1, Image_2, Image_3, Image_4 } from "./assets/image";

const IMAGE_ARR = [Image_1, Image_2, Image_3, Image_4];
const INTERVAL_TIME = 5000;

const App = () => {
  const [index, setIndex] = useState(0);

  const nextImage = useCallback(() => {
    setIndex((prev) => (prev + 1) % IMAGE_ARR.length);
  }, []);

  const prevImage = useCallback(() => {
    setIndex((prev) => (prev - 1 + IMAGE_ARR.length) % IMAGE_ARR.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, INTERVAL_TIME);

    return () => clearInterval(timer);
  }, [nextImage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextImage, prevImage]);

  return (
    <div className="container">
      <div className="carousel">
        <img src={IMAGE_ARR[index]} alt={`carousel-frame-${index + 1}`} />

        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{
              animation: `progress ${INTERVAL_TIME}ms linear infinite`,
            }}
          />
        </div>

        <button
          onClick={prevImage}
          className="carousel-btn btn-left"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextImage}
          className="carousel-btn btn-right"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;
