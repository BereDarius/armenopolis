import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { fontSans, fontSerif } from "@/config/fonts";
import {
  armenopolis1,
  armenopolis2,
  armenopolis3_1,
  armenopolis3_2,
  armenopolis4,
  armenopolis5,
  armenopolis6,
  jacuzzi,
  karol1,
  karol10,
  karol11,
  karol12,
  karol13,
  karol14,
  karol15,
  karol16,
  karol2,
  karol3,
  karol4,
  karol5,
  karol6,
  karol7,
  karol8,
  karol9,
  reginaMaria1,
  reginaMaria2,
  reginaMaria3,
  reginaMaria4,
} from "@/public/images/images";

export default function DespreNoiPage() {
  return (
    <main className="flex flex-col items-center gap-12 my-12">
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Hotel Armenopolis
      </h1>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Armenopolis"
          isBlurred={true}
          loading="eager"
          src={armenopolis1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Armenopolis</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Hotel Armenopolis este o casă armeană istorică, datând din 1762,
        transformată într-o oază barocă de relaxare pentru turiștii din Gherla.
        Amplasată în inima orașului, această reședință plină de istorie își
        întâmpină vizitatorii cu un aer boem, unde boltele elegante, pianul de
        la intrare și mobilierul din lemn masiv recreează farmecul epocilor
        trecute.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Construită în 1762 de o familie armeană, casa este situată pe strada
        principală a orașului, aproape de kilometrul 0 al localității. Inițial
        destinată ca locuință, casa a fost vândută în jurul anului 1800 unei
        familii evreiești, devenind o școală evreiască. Ulterior, după venirea
        regimului comunist, casa a fost naționalizată și a funcționat ca sediu
        UCECOM din Gherla.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        De doi ani, Hotel Armenopolis continuă să aducă la viață istoria
        fascinantă a orașului, oferind o experiență de neuitat pentru toți cei
        care îi trec pragul.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Poarta Hotel Armenopolis, renovată"
          isBlurred={true}
          loading="eager"
          src={armenopolis2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Poarta Hotel Armenopolis, renovată
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Clădirea hotelului, văzută din curtea interioară"
          isBlurred={true}
          loading="eager"
          src={armenopolis3_1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Clădirea hotelului, văzută din curtea interioară
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Clădirea hotelului, văzută din curtea interioară"
          isBlurred={true}
          loading="eager"
          src={armenopolis3_2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Clădirea hotelului, văzută din curtea interioară
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Acoperișul a fost mansardat, dobândind astfel și o utilitate practică,
        prin noi spații de cazare. În curte a fost construit un foișor și un Spa
        cu saună, jacuzzi și sală de masaj.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Camere și sală de mese în stil baroc. Spa și facilități moderne.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Armenopolis, Gherla - cameră dublă"
          isBlurred={true}
          loading="eager"
          src={armenopolis4.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Armenopolis, Gherla - cameră dublă, în stil baroc.
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Casa armenească de la 1762 oferă acum turiștilor patru camere duble cu
        pat matrimonial și opt camere single, combinând confortul modern cu
        farmecul istoric.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Pe lângă serviciile hoteliere, hotelul oferă și servicii de
        sacroterapie, benefice pentru surmenaj, stres și depășirea momentelor
        dificile din viața fiecărei persoane.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Unitatea include Paraclisul Sfintei Cecilia, unde cei interesați se pot
        ruga la Racla Sfintei.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Paraclis al Sfintei Cecilia"
          isBlurred={true}
          loading="eager"
          src={armenopolis5.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Paraclis al Sfintei Cecilia
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Pentru cei care doresc, hotelul organizează și evenimente în salonul de
        servit masa, pentru 25-30 de persoane.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Salonul în care servește micul dejun"
          isBlurred={true}
          loading="eager"
          src={armenopolis6.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Salonul în care servește micul dejun
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Conform unui tratat de arhitectură armenească, bolta din salonul de mic
        dejun a fost declarată cea mai frumoasă boltă din Gherla.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Zona de SPA vă oferă posibilitatea de a petrece timp în jacuzzi, saună
        și, la cerere, să beneficiați de sesiuni de masaj.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Jacuzzi"
          isBlurred={true}
          loading="eager"
          src={jacuzzi.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Jacuzzi</span>
      </div>
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Hotel Karol
      </h1>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Hotel Karol este o casă armenească din 1767, transformată într-o oază
        barocă de relaxare pentru turiștii din Gherla.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - intrare"
          isBlurred={true}
          loading="eager"
          src={karol1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - intrare</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - curte"
          isBlurred={true}
          loading="eager"
          src={karol2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - curte</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - lobby"
          isBlurred={true}
          loading="eager"
          src={karol3.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - lobby</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - camera"
          isBlurred={true}
          loading="eager"
          src={karol4.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - camera</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - camera"
          isBlurred={true}
          loading="eager"
          src={karol5.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - camera</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - camera"
          isBlurred={true}
          loading="eager"
          src={karol6.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - camera</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - lobby"
          isBlurred={true}
          loading="eager"
          src={karol7.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - lobby</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - camera"
          isBlurred={true}
          loading="eager"
          src={karol8.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - camera</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Pe lângă serviciile hoteliere, hotelul oferă posibilitatea organizării
        unor concursuri de gătit, atât în bucătăria hotelului, cât și pe terasa
        special amenajată pentru grătar.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - bucatarie"
          isBlurred={true}
          loading="eager"
          src={karol9.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Karol - bucatarie
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - terasa"
          isBlurred={true}
          loading="eager"
          src={karol10.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Karol - terasa</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Servirea mesei se poate face în sală într-o atmosferă elegantă sau pe
        terasă.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - loc de luat masa"
          isBlurred={true}
          loading="eager"
          src={karol11.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Karol - loc de luat masa
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Servirea mesei se poate face și cu preparate puse la dispoziția
        clienților, la comandă.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Karol - loc de luat masa"
          isBlurred={true}
          loading="eager"
          src={karol12.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Karol - loc de luat masa
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activitati in crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol13.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activitati in crama hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activitati in crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol14.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activitati in crama hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activitati in crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol15.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activitati in crama hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activitati in crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol16.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activitati in crama hotelului
        </span>
      </div>
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Casa Regina Maria
      </h1>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Casa Regina Maria este cea de-a treia locație a Complexului Hotelier
        Armenopolis.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        În această locație, se oferă servicii de cazare și mic dejun pentru o
        parte din echipă, asigurând confortul și ospitalitatea necesare.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Regina Maria - bucatarie"
          isBlurred={true}
          loading="eager"
          src={reginaMaria1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Regina Maria - bucatarie
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Regina Maria - lobby"
          isBlurred={true}
          loading="eager"
          src={reginaMaria2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Regina Maria - lobby</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Regina Maria - camera"
          isBlurred={true}
          loading="eager"
          src={reginaMaria3.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Regina Maria - camera</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Regina Maria - camera"
          isBlurred={true}
          loading="eager"
          src={reginaMaria4.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Regina Maria - camera</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Locația excelează în crearea unui mediu ideal pentru activități de team
        building, combinând relaxarea cu diverse opțiuni de divertisment.
        Fiecare detaliu este conceput pentru a asigura o experiență memorabilă,
        transformând Complexul Hotelier Armenopolis într-un reper de referință
        pentru team building în România.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Locul este recunoscut pentru serviciile sale excepționale și pentru
        capacitatea de a oferi experiențe personalizate fiecărui grup.
        Indiferent dacă preferați activități în aer liber sau momente de
        relaxare la spa, Complexul Hotelier Armenopolis răspunde nevoilor
        echipelor care doresc să se reconecteze și să crească împreună.
      </article>
    </main>
  );
}
