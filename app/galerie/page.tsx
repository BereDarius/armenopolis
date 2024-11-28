import { Image } from "@nextui-org/image";
import { StaticImageData } from "next/image";

import images from "../../public/images/images";

export default function GaleriePage() {
  const imageGroups: StaticImageData[][] = [];

  /*
    Split the images array into groups of four
    
    Example: 
      images = [image11, image12, image13, image14,
                image21, image22, image23, image24]
      imageGroups = [[image11, image12, image13, image14],
                     [image21, image22, image23, image24]]
    
    It will be displayed as:
|------------------------------|
|          {{navbar}}          |
|                              |
|      image11   image21       |
|      image12   image22       |
|      image13   image23       |
|      image14   image24       |
|                              |
|          {{footer}}          |
|------------------------------|
  */
  for (let i = 0, j = 0; i < images.length; i++) {
    if (i >= 4 && i % 4 === 0) j++;
    imageGroups[j] = imageGroups[j] || [];
    imageGroups[j].push(images[i]);
  }

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageGroups.map((group) => (
          <div
            key={group.map((img) => img.src).join("|")}
            className="grid gap-4"
          >
            {group.map((image) => (
              <div key={image.src}>
                <Image
                  alt={image.src}
                  className="h-auto max-w-full rounded-lg hover:cursor-pointer"
                  isBlurred={true}
                  isZoomed={true}
                  loading="eager"
                  src={image.src}
                />
              </div>
            ))}
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
