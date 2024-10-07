import { Icon } from "@/utils";
import { Button } from "@nextui-org/button";
import React, { useState, useEffect, useCallback } from "react";

export const GalleryPartnersIndividualService = () => {
  const images = [
    "https://www.letsmakeup.es/wp-content/uploads/2020/02/LETSMAKEUP-Video-principal-maquillando.jpg",
    "https://fotos.perfil.com/2023/11/07/trim/1280/720/makeup-natural-y-con-mucho-glow-para-primavera-y-verano-1693007.jpg",
    "https://www.mbmmakeupstudio.com/wp-content/uploads/2021/04/Natural-Makeup-Look-1.jpg",
    "https://hyperli.com/cdn/shop/products/makeup-full-face-4_jonf.webp?v=1682330757",
    "https://media.istockphoto.com/id/1331637318/es/foto/retrato-de-una-joven-afro-con-maquillaje-brillante.jpg?s=612x612&w=0&k=20&c=fPy3FU0eN8TY0HSkkRj03oXjCBQBOQGGcjdy4BzaQ-4=",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleImageClick = (image: string, index: number) => {
    setMainImage(image);
    setCurrentIndex(index);
  };

  const handleMainImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isModalOpen) {
        if (event.key === "ArrowLeft") {
          handlePrevious();
        } else if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "Escape") {
          handleCloseModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handlePrevious, handleNext]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-center">
      <div className="w-full md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-y-auto space-x-4 md:space-x-0 md:space-y-4 p-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-16 rounded-lg cursor-pointer shadow-md transition-transform transform hover:scale-105 ${
              mainImage === image ? "ring-4 ring-emerald-200 scale-110" : ""
            }`}
            onClick={() => handleImageClick(image, index)}
          />
        ))}
      </div>

      <div className="w-full md:w-3/4 h-[400px] p-4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-full rounded-lg shadow-lg cursor-pointer object-cover"
          onClick={handleMainImageClick}
        />
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden"
            style={{
              width: "90vw",
              maxWidth: "800px",
              height: "90vh",
              maxHeight: "600px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-300
                    transform
                    hover:scale-105
                    cursor-pointer
                "
              />
            </div>
            <Button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label="Previous image"
              isIconOnly
            >
                { Icon({
                name: 'FaChevronLeft',
                library: 'fa6',
                className: 'text-black text-base'
              }) }
            </Button>
            <Button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              isIconOnly
            >
            { Icon({
                name: 'FaChevronRight',
                library: 'fa6',
                className: 'text-black text-base'
              }) }
            </Button>
            <Button
              className="absolute top-2 right-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseModal();
              }}
              aria-label="Close modal"
              isIconOnly
            >
              { Icon({
                name: 'IoCloseOutline',
                library: 'io5',
                className: 'text-black text-2xl'
              }) }
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
