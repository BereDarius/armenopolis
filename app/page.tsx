import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { fontSans, fontSerif } from "@/config/fonts";
import { homepage } from "@/public/images/images";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Transformă momentele tale de relaxare într-un eveniment de neuitat!
      </h1>
      <article
        className={clsx(fontSerif.className, "mt-4 text-2xl text-center")}
      >
        <strong>Complexul Hotelier Armenopolis</strong>, cunoscut și sub numele
        de &quot;micul Brukenthal&quot;, aduce la viață povestea istorică,
        transformând-o într-o experiență memorabilă și de neuitat.
      </article>
      <section className="flex flex-row justify-center md:justify-start gap-4">
        <Button
          as={Link}
          color="default"
          href="/despre-noi"
          radius="md"
          size="lg"
          variant="bordered"
        >
          Despre noi
        </Button>
        <Button
          as={Link}
          color="default"
          href="/contact"
          radius="md"
          size="lg"
          variant="shadow"
        >
          Contactează-ne
        </Button>
      </section>
      <Image
        alt="Hotel Armenopolis"
        isBlurred={true}
        loading="eager"
        src={homepage.src}
        width="1000"
      />
    </main>
  );
}
