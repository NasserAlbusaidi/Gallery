import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Image from 'next/image';
import GridGalleryCard from './Grid';

export default function GridGallery({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images).fill(false)
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
    <div className="grid grid-cols-2 gap-4 mx-4 py-24 sm:py-2">
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
              location={imageUrl.location}
              date={imageUrl.date}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}
