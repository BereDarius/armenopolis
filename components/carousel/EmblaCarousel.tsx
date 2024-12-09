"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@nextui-org/image";
import { EmblaOptionsType } from "embla-carousel";

import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import images from "@/public/images/images";

const OPTIONS: EmblaOptionsType = {
  axis: "y",
};

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container">
          {images.map((image) => (
            <div key={image.src} className="embla__slide">
              <Image
                className="embla__slide__number"
                loading="eager"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
