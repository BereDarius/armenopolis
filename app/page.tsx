import clsx from "clsx";
import { Image } from "@nextui-org/image";

import { homepage } from "@/public/images/images";
import { title, subtitle } from "@/components/primitives";
import { fontSerif } from "@/config/fonts";

export default function Home() {
  return (
    <main className="felx flex-col text-center h-full md:h-4/6">
      <span
        className={title({
          color: "yellow",
          size: "lg",
        })}
      >
        Hotel Karol&nbsp;
      </span>
      <section className="flex flex-col md:flex-row items-center justify-center h-full gap-4">
        <section className="flex flex-col gap-4 max-w-xl text-center justify-center">
          <Image
            alt={homepage.src}
            isBlurred={true}
            loading="eager"
            src={homepage.src}
          />
        </section>
        <section className="flex flex-col gap-4 max-w-xl text-center justify-center">
          <article
            className={clsx(
              subtitle({ class: "text-small px-4" }),
              fontSerif.className,
            )}
          >
            Situat în Gherla, la 41 km de EXPO Transilvania și la 45 km de
            Muzeul Etnografic al Transilvaniei, Hotelul Karol oferă cazare cu
            lounge comun, terasă și WiFi gratuit.
          </article>
          <article
            className={clsx(
              subtitle({ class: "text-small px-4" }),
              fontSerif.className,
            )}
          >
            Apartamentul are TV cu ecran plat şi baie privată cu articole de
            toaletă gratuite, uscător de păr şi bideu. Oaspeții Hotelului Karol
            pot savura mic dejun tip bufet sau continental.
          </article>
          <article
            className={clsx(
              subtitle({ class: "text-small px-4" }),
              fontSerif.className,
            )}
          >
            Palatul Bánffy este situat la 45 km de cazare, iar Cluj Arena se
            află la 46 km. Cel mai apropiat aeroport este Aeroportul
            Internaţional Cluj Avram Iancu, situat la 35 km de Hotelul Karol.
          </article>
        </section>
      </section>
    </main>
  );
}
