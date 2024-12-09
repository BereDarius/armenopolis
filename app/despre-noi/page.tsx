import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { fontSans, fontSerif } from "@/config/fonts";
import {
  armenopolis1,
  armenopolis2,
  armenopolis3,
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
        Hotel Armenopolis este o casă armenească de la 1762 care a devenit o
        oază barocă de relaxare pentru turiștii, în Gherla.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        De doi ani, o casă armenească de la 1762 din Gherla (fostul Armenopolis)
        a devenit o oază barocă de liniște și relaxare pentru turiști. Amplasată
        în centrul orașului Gherla, casa, acum transformată în Hotel Armenopolis
        își întâmpină turiștii cu un aer boem, boltele, pianul aflat la intrare
        și piesele de mobilier din lemn masiv transportând vizitatorii în
        vremurile de demult.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Construită la 1762 de către o familie de armeni, casa este localizată pe
        strada principală a orașului, aproape de kilometrul 0 al localității.
        Casa a avut inițial destinație de locuit, dar pe la 1800 a fost vânduta
        unor evrei și din momentul acela a funcționat ca și școală evreiască.
        Ulterior, după venirea comuniștilor, casa a fost naționalizată și ultima
        ei destinație a fost sediul UCECOM din Gherla.
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
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        În urmă cu cinci ani, proprietarul actual a cumpărat casa de la un
        moștenitor. Casa era în paragină, acoperișul era complet distrus.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Clădirea hotelului, văzută din curtea interioară"
          isBlurred={true}
          loading="eager"
          src={armenopolis3.src}
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
        pat matrimonial și opt camere single.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Pe langa serviciile hoteliere, hotelul oferă și servicii de sacroterapie
        care sunt benefice in caz de surmenaj, stres si depasirea momentelor
        dificile care apar in viata oricarei persoane.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Unitatea detine un Paraclis al Sfintei Cecilia unde cine doreste se
        poate ruga la Racla Sfintei.
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
        Într-un tratat de arhitectură armenească, bolta din salonul în care
        servește micul dejun a fost declarată cea mai frumoasă boltă din Gherla.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Partea de SPA va ofera posibilitatea sa petreceti timp in JACUZII ,
        SAUNA si la cerere MASAJ.
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
        Hotel Karol este o casă armenească de la 1767 care a devenit o oază
        barocă de relaxare pentru turiștii, în Gherla.
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
        Pe lângă serviciile hoteliere hotelul oferă posibilitatea organizarii
        unor concursuri de gatit in bucataria hotelului cat si pe terasa la
        gratar.
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
        Servirea mesei in sala intr-o admosfera de o deosebita eleganta sau pe
        terasa.
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
        Servirea mesei se poate face si cu preparate puse la dispozitia
        clientilor, la comanda.
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
        Casa Regina Maria este cea de a treia locatie a Complexului Hotelier
        Armenopolis.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        In aceasta locatie se pot oferi servicii de cazare si masa (mic dejun)
        pentru o parte a echipei
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
        Locația excellează în crearea unui mediu propice pentru activități de
        team building, îmbinând relaxarea cu diversele opțiuni de divertisment.
        Fiecare detaliu este gândit să contribuie la o experiență memorabilă,
        făcând din Complexul Hotelier Armenopolis un punct de referință printre
        locațiile team building din România.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Locul este recunoscut pentru serviciile sale excepționale și pentru
        capacitatea de a oferi o experiență personalizată fiecărui grup.
        Indiferent dacă doriți activități în aer liber sau momente de relaxare
        la spa, Complexul Hotelier Armenopolis răspunde nevoilor echipelor care
        doresc să se reconecteze și să se dezvolte împreună.
      </article>
    </main>
  );
}
