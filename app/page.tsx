import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { Image } from "@nextui-org/image";

import { fontSans, fontSerif } from "@/config/fonts";
import { homepage } from "@/public/images/images";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12">
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Transformă team building-ul într-un eveniment de neuitat!
      </h1>
      <article
        className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
      >
        Complexul Armenopolis îmbină aventura și luxul pentru a oferi experiențe
        memorabile. Ideal pentru team building-uri, relaxare și descoperirea
        patrimoniului cultural din Gherla.
      </article>
      <section className="flex flex-row justify-center md:justify-start gap-4">
        <Button color="default" radius="md" size="lg" variant="bordered">
          Despre noi
        </Button>
        <Button color="default" radius="md" size="lg" variant="shadow">
          Contactează-ne
        </Button>
      </section>
      <Image
        alt="Hotel Armenopolis"
        isBlurred={true}
        loading="eager"
        src={homepage.src}
        width="750"
      />
    </main>
  );
}
