import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/port1.png';
import img2 from '../assets/port2.png';
import img3 from '../assets/port3.png';
import Star from '../star/Star';
import { Helmet } from 'react-helmet-async';


const images = [img1, img2, img3,img1, img2, img3];


const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  const handleImageOverlayClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
        <h1 className="text-3xl font-bold text-center text-cyan-900 mt-24 mb-4">PORTFOLIO</h1>
             <Star beforeClassName="bg-cyan-900 h-1" afterClassName="bg-cyan-900 h-1" colorText="text-cyan-900" />
      <div className="flex flex-wrap justify-center container mx-auto gap-4 my-11">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-fit w-full sm:w-2/5 lg:w-1/4 cursor-pointer group"
            onClick={() => handleImageClick(image)} >
            <img src={image} alt={`image${index}`} className="w-full h-auto rounded-md" />
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 duration-500 group-hover:bg-emerald-800 group-hover:opacity-50">
              <FontAwesomeIcon icon={faPlus} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-8xl text-white opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-blue-300 bg-opacity-70 flex items-center justify-center" 
          onClick={handleOverlayClick}
        >
          <img 
            src={selectedImage} 
            alt="Overlay" 
            className="lg:max-w-full h-5/6 mt-16 cursor-auto max-w-xs" 
            onClick={handleImageOverlayClick} 
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;