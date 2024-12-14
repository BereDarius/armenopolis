"use client";

import clsx from "clsx";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { biliard, jacuzzi, nicula, parc2 } from "@/public/images/images";
import { fontSans, fontSerif } from "@/config/fonts";

export default function FacilitatiPage() {
  return (
    <main className="flex flex-col items-center gap-12">
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-7xl font-bold text-center",
        )}
      >
        O locație ideală pentru Team Building-uri!
      </h1>
      <section className="flex flex-col">
        <article
          className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
        >
          Îmbunătățește coeziunea și performanța echipei tale într-un cadru
          unic!
        </article>
        <article
          className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
        >
          Aventura și luxul se întâlnesc pentru a crea experiențe memorabile!
        </article>
        <article
          className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
        >
          Alegând locația noastră, următorul tău eveniment corporate va deveni
          un succes de neuitat!
        </article>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="py-4">
          <CardHeader className="pt-2 px-4 flex-col items-start">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              height={160}
              src={parc2.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Drumeții și sporturi
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Tenis, fotbal, baschet, badminton.
            </small>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Drumeții în parc și pădure.
            </small>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pt-2 px-4 flex-col items-start">
            <Image
              alt="Biliard"
              className="object-cover rounded-xl"
              height={160}
              src={biliard.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Activități de echipă
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Jocuri de societate (cărți, table, șah, scabble, rummy, monopoly).
            </small>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Concursuri de gătit.
            </small>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pt-2 px-4 flex-col items-start">
            <Image
              alt="Jacuzzi"
              className="object-cover rounded-xl"
              height={160}
              src={jacuzzi.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Relaxare și deconectare
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Jacuzzi, saună, masaj.
            </small>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Grătar în aer liber.
            </small>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Băncuțe în natură.
            </small>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pt-2 px-4 flex-col items-start">
            <Image
              alt="Mănăstirea Nicula"
              className="object-cover rounded-xl"
              height={160}
              src={nicula.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p
              className={clsx(
                fontSans.className,
                "text-2xl uppercase font-bold",
              )}
            >
              Obiective turistice
            </p>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Biserica Solomon.
            </small>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Penitenciarul Gherla (Cetatea Martinuzzi).
            </small>
            <small
              className={clsx(fontSerif.className, "text-default-500 text-md")}
            >
              Mănăstirea Nicula.
            </small>
          </CardBody>
        </Card>
      </section>
      <article
        className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
      >
        De asemenea, locația noastră oferă posibilitate de eventiment
        exclusiviste și selecte, cum ar fi nunți, logodne și ședințe foto,
        create special pentru persoanele romantice.
      </article>
      <Divider />
      <section className="flex flex-col gap-4">
        <h1
          className={clsx(
            fontSans.className,
            "text-4xl md:text-7xl font-bold text-center",
          )}
        >
          Teambuilding-ul - Mai mult decât o simplă activitate de relaxare!
        </h1>
        <article
          className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
        >
          Teambuilding-ul nu este doar o activitate de relaxare sau distracție.
          Este o modalitate strategică de a consolida relațiile dintre membrii
          unei echipe, de a dezvolta încrederea și comunicarea, de a stimula
          creativitatea și gândirea strategică și, nu în ultimul rând, de a
          atinge obiective comune într-un mod mai eficient. Acest proces implică
          activități variate și provocatoare, menite să încurajeze interacțiunea
          autentică și să faciliteze învățarea și dezvoltarea personală și
          profesională a fiecărui membru al echipei.
        </article>
        <article
          className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
        >
          Într-un astfel de context, fiecare membru al echipei contribuie la
          atingerea scopurilor comune. Prin activitățile și provocările propuse
          în cadrul unui teambuilding, membrii echipei își dezvoltă abilitățile
          de lucru în echipă, își îmbunătățesc capacitatea de a rezolva probleme
          și de a lua decizii și dobândesc încredere în abilitățile proprii și
          în ale colegilor. Toate aceste aspecte sunt esențiale pentru o
          colaborare eficientă și pentru atingerea succesului într-un mediu
          complex și dinamic.
        </article>
        <article
          className={clsx(fontSerif.className, "mt-4 text-xl text-center")}
        >
          Un teambuilding bine plănuit și desfășurat într-un loc neconvențional
          poate fi o experiență transformatoare, rămânând în amintirile și
          relațiile echipei pentru mult timp. Programele de team building
          organizate în locația noastră sunt menite să introducă participanții
          în atmosfera de poveste a unor perioade istorice sau a unor
          îndeletniciri nemaivăzute, creând experiențe de neuitat pentru toți
          colegii.
        </article>
      </section>
      <Divider />
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Locație</TableColumn>
          <TableColumn>Municipiul Gherla, jud. Cluj, România</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Facilități de top</TableCell>
            <TableCell>
              <ul>
                <li>&#x2022; Masă de biliard</li>
                <li>
                  &#x2022; Jocuri de societate: cărți, table, șah, scrabble,
                  rummy, monopoly
                </li>
                <li>&#x2022; Xbox</li>
                <li>&#x2022; Wii: dans și karaoke</li>
                <li>&#x2022; Jacuzzi și saună</li>
                <li>&#x2022; Bănci în natură</li>
                <li>&#x2022; Mic dejun, prânz și cină la comandă</li>
                <li>&#x2022; Concursuri de gărtit</li>
                <li>&#x2022; Grătar în aer liber</li>
                <li>&#x2022; Jocuri în aer liber</li>
                <li>
                  &#x2022; Colecție de cărți pe diverse teme și materiale
                  turistice
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Activități disponibile</TableCell>
            <TableCell>
              <ul>
                <li>&#x2022; Drumeții în parc sau în pădure</li>
                <li>
                  &#x2022; Sporturi și jocuri: tenis, ping-pong, badminton,
                  fotbal, baschet
                </li>
                <li>
                  &#x2022; Vizitarea obiectivelor turistice și naturale din
                  Gherla și împrejurimi
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Capacitate maximă cazare</TableCell>
            <TableCell>16-50 persoane</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
