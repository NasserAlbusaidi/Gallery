import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Image from 'next/image';

export default function GridGallery({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={imageUrl.src}
              show={imagesShownArray[index]}
              text={imageUrl.text}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show, text }) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? '' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          {text}
        </div>
      </div>
      <Image src={imageUrl} layout="fill" alt="hi" />
    </div>
  );
}
