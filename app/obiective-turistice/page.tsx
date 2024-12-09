import clsx from "clsx";
import { Image } from "@nextui-org/image";

import { fontSans, fontSerif } from "@/config/fonts";
import {
  bisericaSolomon,
  casaArmeneasca,
  dealuri,
  laculStiucilor,
  manastireaSf40,
  nicula,
  panorama,
  saratura,
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
        Obiective turistice și naturale pe care le puteți vizita în Gherla ca și
        oraș turistic
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
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla este per ansamblu un oraș interesant din punct de vedere
        turistic, deși foarte puțin cunoscut. Construit în stil baroc, orașul a
        fost înființat de armeni în secolul al XVIII-lea, primind la vremea
        respectivă numele de Armenopolis.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla este singurul oraș din România care a fost construit după un plan
        prestabilit și a cărui construcție s-a păstrat până în prezent. Faptul
        că stilul baroc domină se datorează pătrunderii stilului baroc în
        Transilvania o dată cu fondarea Gherlei de către coloniștii armeni,
        veniți din Moldova la inițiativa și cu permisiunea Curții Imperiale de
        la Viena.
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
        Construcțiile înălțate în a doua jumătate a secolului XVIII-lea au fost
        realizate conform unor tipare în care elementele de planimetrie locală
        transilvăneană, dar și cele tipice Austriei superioare sau Boemiei, au
        primit un adaos decorativ de factură barocă.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Nu multă lume știe că în Gherla se află și cea mai mare catedrală a
        armenilor catolici din lume, o catedrală în care se poate vedea și un
        tablou impresionant pictat de Rubens.
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
        Transilvania, totodată prima biserică de piatră din Gherla, construită
        între anii 1723 şi 1724.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Tot în Gherla există o sinagogă construită de evreii care au imigrat în
        Gherla, și în plus multe alte biserici, Gherla fiind unul dintre orașele
        cu cel mai mare număr de biserici pe cap de locuitor.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Gherla este celebră și pentru penitenciarul din localitate, care
        funcționează într-o fostă cetate, Cetatea Martinuzzi, construită în
        1540, la ordinul episcopului de Oradea Gheorghe Martinuzzi, totodată
        cancelar și vistier la Curtea Regală maghiară.
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
        Anul 2017 a fost declarat de către Sf. Sinod al BOR an omagial dedicat
        celor ce au suferit în închisorile comuniste. La 1 octombrie 2017 s-a
        luat decizia înființării unei mănăstiri în Gherla dedicată deținuților
        politici ce au murit în penitenciarul din apropiere.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Locația aleasă a fost Dealul Cărămidăriei, unde lângă cimitirul cu gropi
        comune al deținuților politici din periada comunistă a fost ridicată o
        capelă, un spațiu expozițional, o bibliotecă tematică și o sală de
        conferințe.
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
        Muzeul de Istorie din Gherla funcționează într-o clădire istorică
        restaurată, cunoscută drept „Casa Laszloffy”, care a fost inițial sediul
        instituției înființate în 1907. Expoziția permanentă este organizată în
        opt camere și include artefacte din neolitic, epoca metalelor și, în
        special, din perioada daco-romană. Există și exponate vechi cum ar fi o
        diplomă militară romană din anul 123 și echipamente militare romane.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Centrul muzeal prezintă și o cameră armenească tradițională, cu obiecte
        specifice, precum și o colecție de obiecte de cult armenești. De
        asemenea, găzduiește o colecție de picturi și sculpturi, un lapidariu,
        piese de etnografie, numismatică și o bibliotecă cu peste 5.000 de
        volume.
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
        În împrejurimile Gherlei se găsesc mai multe rezervații naturale,
        printre care cele mai importante fiind cea de la Lacul Știucilor și
        Stufărișul de la Sic, care este a doua suprafața ca mărime acoperită cu
        stuf după Delta Dunării.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Rezervația naturală Lacul Știucilor, singurul lac natural din
        Transilvania care nu a suferit nicio influență negativă semnificativă
        umană, este cel mai adânc lac natural dulce din interiorul țării.
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
        De asemenea, la 5 km de Gherla se află mănăstirea Nicula, unul dintre
        cele mai importante obiective în turismul religios și de pelerinaj,
        renumită prin icoana Maicii Domnului făcătoare de minuni.
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
        Pentru cei care doresc să facă tratamente balneare, la aproximativ 10 km
        de Gherla, la ieșirea din comuna Sic, există o “sărătură” așa cum o
        numesc localnicii, o piscină naturală, cu apă foarte sărată și amenajată
        pentru baie.
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
