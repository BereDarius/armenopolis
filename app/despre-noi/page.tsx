import { Image } from "@nextui-org/image";
import clsx from "clsx";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { fontSans, fontSerif } from "@/config/fonts";
import {
  armenopolis2,
  armenopolis3_1,
  armenopolis3_2,
  armenopolis5,
  armenopolis6,
  armenopolis8,
  armenopolis9,
  armenopolisCamera,
  armenopolisCamera2,
  jacuzzi,
  karol1,
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
  masaj,
  reginaMaria1,
  reginaMaria2,
  reginaMaria3,
  reginaMaria4,
  sauna,
} from "@/public/images/images";

export default function DespreNoiPage() {
  return (
    <main className="flex flex-col items-center gap-12 my-12">
      <section className="flex flex-col gap-4">
        <h1
          className={clsx(
            fontSans.className,
            "text-4xl md:text-6xl font-bold text-center",
          )}
        >
          Complexul Hotelier Armenopolis
        </h1>
        <section className="flex flex-col text-center">
          <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
            Bine ați venit la <strong>Complexul Hotelier Armenopolis</strong>,
            un loc unde istoria și eleganța se îmbină perfect pentru a vă oferi
            o experiență de neuitat.
          </article>
          <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
            Complexul nostru cuprinde trei locații deosebite:
          </article>
        </section>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="py-4">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Hotel Armenopolis"
              className="object-cover rounded-xl"
              height={200}
              src={armenopolis2.src}
              width={400}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Hotel Armenopolis
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-lg")}
            >
              Reședință armeană de epocă, care datează din 1762, transformând
              farmecul baroc într-o oază de relaxare.
            </small>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pt-2 px-8 flex-col items-center">
            <Image
              alt="Hotel Karol"
              className="object-cover rounded-xl"
              height={200}
              src={karol3.src}
              width={400}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Hotel Karol
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-lg")}
            >
              Un hotel elegant, care îmbină confortul cu farmecul aristocrat,
              perfect atât pentru călătorii de afaceri, cât și pentru turiști.
            </small>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pt-2 px-8 flex-col items-center">
            <Image
              alt="Micul Palat Regina Maria"
              className="object-cover rounded-xl"
              height={200}
              src={reginaMaria4.src}
              width={400}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Micul Palat Regina Maria
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-lg")}
            >
              O locație tradițională românească, ce oferă o atmosferă caldă și
              primitoare, perfectă pentru o evadare romantică sau o vacanță în
              familie.
            </small>
          </CardBody>
        </Card>
      </section>
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
          src={armenopolis2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Hotel Armenopolis</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Hotel Armenopolis este amenajat într-un conac armenesc din 1762 având o
        arhitectură barocă. Este situat în centrul orașului Gherla, la 45 de km
        de Cluj-Napoca și de Aeroportul Internațional Avram Iancu. Această
        reședință istorică, inițial locuința unei familii armene, a fost
        transformată ulterior în școală evreiască și păstrează farmecul epocilor
        trecute prin arhitectura sa elegantă, bolțile rafinate și mobilierul din
        lemn masiv.
        <br />
        <br />
        Cu 12 camere confortabile, dintre care 4 duble și 8 single, hotelul
        Armenopolis îmbină armonios spiritul baroc al secolului al VIII-lea cu
        dotările moderne. Micul dejun bogat și variat este servit într-un living
        decorat cu obiecte de colecție de la începutul anilor 1800.
        <br />
        <br />
        Hotel Armenopolis nu este doar o destinație de cazare, ci și un loc
        ideal pentru organizarea ședințelor foto într-un decor de poveste. În
        fiecare colț al său, istoria fascinantă a orașului Gherla prinde viață,
        oferind o experiență de neuitat tuturor vizitatorilor.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Curtea interioară a hotelului"
          isBlurred={true}
          loading="eager"
          src={armenopolis3_1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Curtea interioară a hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Curtea interioară a hotelului"
          isBlurred={true}
          loading="eager"
          src={armenopolis8.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Curtea interioară a hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Zona de relaxare din curtea interioară a hotelului"
          isBlurred={true}
          loading="eager"
          src={armenopolis3_2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Zona de relaxare din curtea interioară a hotelului
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        În curte se află un foișor și o zonă de relaxare care include jacuzzi,
        sală de relaxare și saună.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Armenopolis, Gherla - Camera părintelui"
          isBlurred={true}
          loading="eager"
          src={armenopolisCamera2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Armenopolis, Gherla - Camera părintelui
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Armenopolis, Gherla - Cameră dublă în stil baroc"
          isBlurred={true}
          loading="eager"
          src={armenopolisCamera.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Armenopolis, Gherla - Cameră dublă în stil baroc
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Hotel Armenopolis, Gherla - Cameră dublă în stil baroc"
          isBlurred={true}
          loading="eager"
          src={armenopolis9.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Hotel Armenopolis, Gherla - Cameră dublă în stil baroc
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Hotelul oferă acum turiștilor patru camere duble cu pat matrimonial și
        opt camere single, combinând confortul modern cu farmecul istoric.
        <br />
        <br /> Pe lângă serviciile hoteliere, pot fi oferite celor care doresc
        și servicii de sacroterapie, benefice pentru surmenaj, stres și
        depășirea momentelor dificile din viața fiecărei persoane.
        <br />
        <br /> Unitatea deține un Paraclis al Sfintei Cecilia, unde cine dorește
        se poate ruga la Racla Sfintei.
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
          alt="Salonul în care se servește micul dejun"
          isBlurred={true}
          loading="eager"
          src={armenopolis6.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Salonul în care se servește micul dejun
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Într-un tratat de arhitectură armenească, bolta din salonul în care se
        servește micul dejun a fost declarată cea mai frumoasă boltă din Gherla.
      </article>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Zona de SPA vă oferă posibilitatea de a beneficia de sesiuni de
        relaxare, cum ar fi: jacuzzi, saună și masaj.
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
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Pentru a elimina stresul și a vă reda starea de bine vă puteți bucura,
        într-un mediu liniștit, de experiența unui masaj de relaxare revigorant.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Masă de masaj"
          isBlurred={true}
          loading="eager"
          src={masaj.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Masă de masaj</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Saună Relaxantă: Experiența de relaxare vă așteaptă în sauna noastră
        modernă.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Saună pentru relaxare"
          isBlurred={true}
          loading="eager"
          src={sauna.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Saună pentru relaxare</span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Serviciile SPA (jacuzzi + saună) se oferă pentru minim 4 persoane la
        prețul de 100 RON / persoană / 4 ore, iar cele de masaj sunt de 150 RON
        / 50 minute.
      </article>
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Hotel Karol
      </h1>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Hotelul Karol, cu o istorie ce datează din 1767, este o locație
        încărcată de eleganță și rafinament. Oferim un cadru de poveste perfect
        pentru ședințe foto. <br />
        Cu mobilierul său baroc și atmosfera sa rafinată, hotelul nostru
        reprezintă o alegere ideală ce va captiva prin combinația de stil clasic
        și modern și prin detaliile opulente ale epocii.
        <br />
        <br />
        Aceasta îmbină atmosfera de poveste cu specificul istoric al hotelului
        și accentuează unicitatea locului.
      </article>

      <div className="flex flex-col gap-2">
        <Image
          alt="Intrarea Hotelului Karol"
          isBlurred={true}
          loading="eager"
          src={karol1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Intrarea Hotelului Karol
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Curtea Hotelului Karol"
          isBlurred={true}
          loading="eager"
          src={karol2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Curtea Hotelului Karol
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Intrarea elegantă a Hotelului Karol"
          isBlurred={true}
          loading="eager"
          src={karol3.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Intrarea elegantă a Hotelului Karol
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Dormitor cu pat dublu - Camera Regelui"
          isBlurred={true}
          loading="eager"
          src={karol5.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Dormitor cu pat dublu - Camera Regelui
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Dormitor Deluxe"
          isBlurred={true}
          loading="eager"
          src={karol4.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>Dormitor Deluxe</span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Dormitor cu pat dublu - Camera Reginei"
          isBlurred={true}
          loading="eager"
          src={karol6.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Dormitor cu pat dublu - Camera Reginei
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Zona de relaxare de la etaj"
          isBlurred={true}
          loading="eager"
          src={karol7.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Zona de relaxare de la etaj
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Dormitor simplu cu pat dublu"
          isBlurred={true}
          loading="eager"
          src={karol8.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Dormitor simplu cu pat dublu
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Bucătăria interioară a hotelului"
          isBlurred={true}
          loading="eager"
          src={karol9.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Bucătăria interioară a hotelului
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Servirea mesei poate avea loc fie în sală, într-un decor elegant și
        rafinat, fie pe terasă, în aer liber.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Sala de luat masa din cadrul hotelului"
          isBlurred={true}
          loading="eager"
          src={karol11.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Sala de luat masa din cadrul hotelului
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Servirea mesei include și posibilitatea de a savura preparate atent
        pregătite, disponibile la comandă pentru o experiență personalizată.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Sala de luat masa din cadrul hotelului"
          isBlurred={true}
          loading="eager"
          src={karol12.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Sala de luat masa din cadrul hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activități în crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol13.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activități în crama hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activități în crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol14.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activități în crama hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activități în crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol15.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activități în crama hotelului
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Organizarea de activități în crama hotelului"
          isBlurred={true}
          loading="eager"
          src={karol16.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Organizarea de activități în crama hotelului
        </span>
      </div>
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        Micul Palat Regina Maria
      </h1>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        În această locație, oferim servicii de cazare și mic dejun, asigurând
        confortul și ospitalitatea necesară pentru oaspeții noștri.
      </article>
      <div className="flex flex-col gap-2">
        <Image
          alt="Bucătăria din incinta Casei Regina Maria"
          isBlurred={true}
          loading="eager"
          src={reginaMaria1.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Bucătăria din incinta Casei Regina Maria
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Livingul spațios și elegant al Casei Regina Maria"
          isBlurred={true}
          loading="eager"
          src={reginaMaria2.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Livingul spațios și elegant al Casei Regina Maria
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Dormitor simplu cu pat dublu"
          isBlurred={true}
          loading="eager"
          src={reginaMaria3.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Dormitor simplu cu pat dublu
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Image
          alt="Dormitor deluxe cu pat dublu"
          isBlurred={true}
          loading="eager"
          src={reginaMaria4.src}
          width="750"
        />
        <span className={clsx(fontSerif.className)}>
          Dormitor deluxe cu pat dublu
        </span>
      </div>
      <article className={clsx(fontSerif.className, "mt-4 text-xl")}>
        Complexul hotelier excelează în crearea unui mediu perfect, îmbinând
        relaxarea cu o varietate de opțiuni de divertisment.
        <br />
        <br /> Suntem recunocuți pentru serviciile excepționale și pentru
        capacitatea de a oferi experiențe personalizate fiecărui grup.
        Indiferent dacă preferați activități în aer liber sau momente de
        relaxare la SPA, Complexul Hotelier Armenopolis răspunde nevoilor
        echipelor care doresc să se reconecteze și să crească împreună.
      </article>
    </main>
  );
}
