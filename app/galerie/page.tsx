import Image from "next/image";

import image from "../../public/images/image.jpg";
import image1 from "../../public/images/image-1.jpg";
import image2 from "../../public/images/image-2.jpg";
import image3 from "../../public/images/image-3.jpg";
import image4 from "../../public/images/image-4.jpg";
import image5 from "../../public/images/image-5.jpg";
import image6 from "../../public/images/image-6.jpg";
import image7 from "../../public/images/image-7.jpg";
import image8 from "../../public/images/image-8.jpg";
import image9 from "../../public/images/image-9.jpg";
import image10 from "../../public/images/image-10.jpg";
import image11 from "../../public/images/image-11.jpg";

export default function GaleriePage() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <Image
            alt="image"
            className="h-auto max-w-full rounded-lg"
            src={image}
          />
        </div>
        <div>
          <Image
            alt="image1"
            className="h-auto max-w-full rounded-lg"
            src={image1}
          />
        </div>
        <div>
          <Image
            alt="image2"
            className="h-auto max-w-full rounded-lg"
            src={image2}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            alt="image3"
            className="h-auto max-w-full rounded-lg"
            src={image3}
          />
        </div>
        <div>
          <Image
            alt="image4"
            className="h-auto max-w-full rounded-lg"
            src={image4}
          />
        </div>
        <div>
          <Image
            alt="image5"
            className="h-auto max-w-full rounded-lg"
            src={image5}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            alt="image6"
            className="h-auto max-w-full rounded-lg"
            src={image6}
          />
        </div>
        <div>
          <Image
            alt="image7"
            className="h-auto max-w-full rounded-lg"
            src={image7}
          />
        </div>
        <div>
          <Image
            alt="image8"
            className="h-auto max-w-full rounded-lg"
            src={image8}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            alt="image9"
            className="h-auto max-w-full rounded-lg"
            src={image9}
          />
        </div>
        <div>
          <Image
            alt="image10"
            className="h-auto max-w-full rounded-lg"
            src={image10}
          />
        </div>
        <div>
          <Image
            alt="image11"
            className="h-auto max-w-full rounded-lg"
            src={image11}
          />
        </div>
      </div>
    </section>
  );
}
