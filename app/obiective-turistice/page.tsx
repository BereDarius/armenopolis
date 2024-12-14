import clsx from "clsx";
import { Image } from "@nextui-org/image";

import { fontSans, fontSerif } from "@/config/fonts";
import {
  bisericaCentru,
  bisericaSolomon,
  casaArmeneasca,
  cetate,
  dealuri,
  laculStiucilor,
  manastireaSf40,
  muzeu,
  nicula,
  panorama,
  parc1,
  saratura,
  sinagoga,
  tablou,
} from "@/public/images/images";

export default function ObiectiveTuristicePage() {
  return (
    <main className="flex flex-col items-center gap-12 my-12">
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Obiective turistice și naturale pe care le puteți vizita în Gherla
      </h1>
      <div className="flex flex-col gap-2">
        <Image
          alt="Panoramă Gherla"
          isBlurred={true}
          loading="eager"
          src={panorama.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Panoramă Gherla. Foto:{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.facebook.com/visitarmenopolis"
          >
            Visit Armenopolis
          </a>
        </span>
      </div>
      <section className={clsx(fontSerif.className, "mt-4 text-xl")}>
        <article>
          Gherla oferă o varietate de obiective turistice și naturale care
          merită a fi explorate. Printre acestea se numără:
        </article>
        <article className="mx-6 my-4">
          <ul className="flex flex-col gap-8 items-center">
            <li>
              <strong>&#x2022; Cetatea Gherlei</strong>: Un loc istoric și
              arhitectonic de excepție
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Cetatea Gherlei"
                  isBlurred={true}
                  loading="eager"
                  src={cetate.src}
                  width="750"
                />
                <span className={(clsx(fontSerif.className), "text-sm")}>
                  Cetatea Gherlei. Foto:{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://clujtourism.ro/portfolio/cetatea-gherla/"
                  >
                    clujtourism.ro
                  </a>
                </span>
              </div>
            </li>
            <li>
              <strong>&#x2022; Catedrala Armeano-Catolică Sfânta Treime</strong>
              : Un simbol al culturii și credinței din zonă
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Catedrala Armeano-Catolică"
                  isBlurred={true}
                  loading="eager"
                  src={bisericaCentru.src}
                  width="750"
                />
                <span className={(clsx(fontSerif.className), "text-sm")}>
                  Catedrala Armeano-Catolică. Foto:{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://ro.wikipedia.org/wiki/Catedrala_Armeano-Catolică_din_Gherla"
                  >
                    Wikipedia
                  </a>
                </span>
              </div>
            </li>
            <li>
              <strong>&#x2022; Parcul Mare</strong>: Un loc ideal pentru o
              plimbare relaxantă în natură
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Parcul Mare"
                  isBlurred={true}
                  loading="eager"
                  src={parc1.src}
                  width="750"
                />
                <span className={(clsx(fontSerif.className), "text-sm")}>
                  Parcul Mare. Foto:{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://ziarulfaclia.ro/parcul-mare-din-gherla-se-reinnoieste/"
                  >
                    ziarulfaclia.ro
                  </a>
                </span>
              </div>
            </li>
            <li>
              <strong>&#x2022; Muzeul de Xilografi</strong>: Ocazia perfectă
              pentru a descoperi artele tradiționale
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Muzeul de Xilografi"
                  isBlurred={true}
                  loading="eager"
                  src={muzeu.src}
                  width="750"
                />
                <span className={(clsx(fontSerif.className), "text-sm")}>
                  Muzeul de Xilografi. Foto:{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://www.muzeuldexilogravura.ro/articole.html"
                  >
                    muzeuldexilogravura.ro
                  </a>
                </span>
              </div>
            </li>
            <li>
              <strong>&#x2022; Sinagoga și Memorialul Holocaustului</strong>:
              Locuri de reflecție și învățare istorică
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Sinagoga din Gherla"
                  isBlurred={true}
                  loading="eager"
                  src={sinagoga.src}
                  width="750"
                />
                <span className={(clsx(fontSerif.className), "text-sm")}>
                  Sinagoga din Gherla. Foto:{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://ro.wikipedia.org/wiki/Sinagoga_din_Gherla"
                  >
                    Wikipedia
                  </a>
                </span>
              </div>
            </li>
            <li>
              <strong>&#x2022; Stațiunea Băile Băița</strong>: Un spa perfect
              pentru relaxare și odihnă
            </li>
          </ul>
        </article>
        <article>
          Acestea sunt doar câteva dintre atracțiile pe care le puteți vizita în
          Gherla, un oraș plin de istorie și frumusețe naturală.
        </article>
      </section>

      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla este un oraș fascinant din punct de vedere turistic, deși încă
        puțin cunoscut. Construit în stil baroc, orașul a fost înființat de
        armeni în secolul al XVIII-lea, primind numele de Armenopolis.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla este singurul oraș din România construit conform unui plan
        prestabilit, păstrat până în prezent. Dominanța stilului baroc se
        datorează fondării orașului de către coloniștii armeni veniți din
        Moldova, la inițiativa și cu permisiunea Curții Imperiale de la Viena.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Casă armeneasca"
          isBlurred={true}
          loading="eager"
          src={casaArmeneasca.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Anul construcției unei case armenești din Gherla, marcat pe
          frontispiciul clădirii. Foto:{" "}
          <a className="text-blue-500 underline" href="https://cluj.info">
            Cluj.info
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Construcțiile ridicate în a doua jumătate a secolului XVIII-lea au fost
        realizate conform unor tipare ce îmbină elemente de planimetrie locală
        transilvăneană cu influențe din Austria superioară și Boemia, îmbogățite
        cu ornamente baroce.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Puțini știu că în Gherla se află cea mai mare catedrală a armenilor
        catolici din lume, unde se poate admira un tablou impresionant pictat de
        Rubens.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Tablou pictat de Rubens"
          isBlurred={true}
          loading="eager"
          src={tablou.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Tablou pictat de Rubens, în Catedrala Armeano-Catolică din Gherla.
          Foto:{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.facebook.com/tinutulflutureluialbastru"
          >
            Ținutul Fluturelui Albastru
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Prima biserică ridicată de armeni este Biserica Solomon, aflată pe
        strada Cloșca. O altă biserică importantă a Gherlei este biserica
        armeano-catolică Sfânta Treime, a cărei construcție lasă să se vadă că
        face parte dintr-un plan prestabilit pentru zona pieței centrale.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Biserica Solomon"
          isBlurred={true}
          loading="eager"
          src={bisericaSolomon.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Biserica Solomon. Foto:{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.facebook.com/visitarmenopolis"
          >
            Visit Armenopolis
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Biserica Solomon este cea mai veche biserică armeano-catolică din
        Transilvania și totodată prima biserică de piatră din Gherla, construită
        între anii 1723 și 1724.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Tot în Gherla se găsește o sinagogă construită de evreii imigranți,
        alături de numeroase alte biserici, făcând din Gherla unul dintre
        orașele cu cel mai mare număr de biserici pe cap de locuitor din
        România.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla este cunoscută și pentru penitenciarul său, amplasat în fosta
        cetate Martinuzzi, construită în 1540 la ordinul episcopului de Oradea,
        Gheorghe Martinuzzi, care a fost totodată cancelar și vistier la Curtea
        Regală maghiară.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Mănăstirea Sf. 40 de Mucenici"
          isBlurred={true}
          loading="eager"
          src={manastireaSf40.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Mănăstirea Sf. 40 de Mucenici Gherla. Foto:{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.memorialulgherla.ro"
          >
            www.memorialulgherla.ro
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        În anul 2017, Sfântul Sinod al Bisericii Ortodoxe Române a dedicat acest
        an celor care au suferit în închisorile comuniste. Pe 1 octombrie 2017,
        s-a decis înființarea unei mănăstiri în Gherla, dedicată deținuților
        politici care au murit în penitenciarul din apropiere.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Locația aleasă a fost Dealul Cărămidăriei, unde, lângă cimitirul cu
        gropi comune ale deținuților politici din perioada comunistă, au fost
        construite o capelă, un spațiu expozițional, o bibliotecă tematică și o
        sală de conferințe.
      </article>
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Centrul Muzeal de Istorie Gherla
      </h1>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Muzeul de Istorie din Gherla funcționează într-o clădire istorică
        restaurată, cunoscută sub numele de „Casa Laszloffy”, care a fost
        inițial sediul instituției înființate în 1907. Expoziția permanentă este
        organizată în opt camere și cuprinde artefacte din neolitic, epoca
        metalelor și, în special, din perioada daco-romană, incluzând o diplomă
        militară romană din anul 123 și echipamente militare romane.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Centrul muzeal prezintă, de asemenea, o cameră armenească tradițională,
        cu obiecte specifice, precum și o colecție de obiecte de cult armenești.
        În plus, muzeul găzduiește o colecție de picturi și sculpturi, un
        lapidariu, piese de etnografie, numismatică și o bibliotecă cu peste
        5.000 de volume.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Lacul Știucilor"
          isBlurred={true}
          loading="eager"
          src={laculStiucilor.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Rezervația naturală Lacul Știucilor. Foto:{" "}
          <a className="text-blue-500 underline" href="https://cluj.info">
            cluj.info
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        În împrejurimile Gherlei se află mai multe rezervații naturale
        importante, printre care Lacul Știucilor și Stufărișul de la Sic, a doua
        cea mai mare suprafață acoperită cu stuf din România, după Delta
        Dunării.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Rezervația naturală Lacul Știucilor, singurul lac natural din
        Transilvania care nu a suferit influențe negative semnificative umane,
        este cel mai adânc lac natural de apă dulce din interiorul țării.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Lacul Știucilor"
          isBlurred={true}
          loading="eager"
          src={dealuri.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Rezervația naturală Lacul Știucilor. Foto:{" "}
          <a className="text-blue-500 underline" href="https://cluj.info">
            cluj.info
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        De asemenea, la doar 5 km de Gherla se află Mănăstirea Nicula, unul
        dintre cele mai importante obiective pentru turismul religios și de
        pelerinaj, cunoscută pentru icoana Maicii Domnului făcătoare de minuni.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Mănăstirea Nicula"
          isBlurred={true}
          loading="eager"
          src={nicula.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Mănăstirea Nicula</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Pentru cei interesați de tratamente balneare, la aproximativ 10 km de
        Gherla, la ieșirea din comuna Sic, se află o piscină naturală cu apă
        foarte sărată, cunoscută local sub denumirea de &quot;Sărătură&quot;,
        amenajată pentru baie.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Sărătura"
          isBlurred={true}
          loading="eager"
          src={saratura.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          &quot;Sărătura&quot; de la Sic. Foto:{" "}
          <a className="text-blue-500 underline" href="https://cluj.info">
            cluj.info
          </a>
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla oferă turiștilor un farmec aparte, liniște, siguranță și lipsă de
        aglomerație. Nu sunt probleme cu locurile de parcare și nici cu găsirea
        de locuri la o terasă. În Gherla veți găsi restaurante decente, unele
        chiar frumoase, prețurile fiind mult mai mici decât la Cluj, iar
        serviciile fiind comparabile.
      </article>
    </main>
  );
}
