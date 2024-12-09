import { EmblaOptionsType } from "embla-carousel";

import Carousel from "@/components/carousel";
import images from "@/public/images/images";

export default function ObiectiveTuristicePage() {
  const options: EmblaOptionsType = {
    align: "center",
  };

  return (
    <main
    // className="flex flex-col md:flex-row gap-4 text-left justify-center items-center w-full md:h-4/6 text-sm md:text-2xl md:my-6 md:gap-12"
    >
      <div className="p-8">
        <Carousel options={options} slides={images} />
        <h1 className="text-3xl font-bold mb-6">
          Descoperă Farmecul Orașului Gherla
        </h1>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            Atracții istorice: Catedrala armeano-catolică, Biserica Solomon,
            sinagoga, Cetatea Martinuzzi.
          </li>
          <li>Natură: Lacul Știucilor, Stufărișul de la Sic.</li>
          <li>
            Locații religioase: Mănăstirea Nicula, Memorialul deținuților
            politici.
          </li>
          <li>Muzeul de Istorie: Artefacte și colecții unice.</li>
        </ul>
      </div>
    </main>
  );
}
