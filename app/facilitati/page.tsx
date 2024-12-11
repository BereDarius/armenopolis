"use client";

import clsx from "clsx";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";

import { biliard, drumetie, jacuzzi, nicula } from "@/public/images/images";
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
        O locatie ideală pentru Team Building-uri!
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
              src={drumetie.src}
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
      <Divider />
      <section className="flex flex-col gap-4">
        <h1
          className={clsx(
            fontSans.className,
            "text-4xl md:text-7xl font-bold text-center",
          )}
        >
          Teambuilding-ul - Mai mult decât o simplă activitate de relaxare
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
      <Tabs placement="start" size="lg">
        <Tab
          key="activitati-unice"
          className="text-xs md:text-xl"
          title="Activități unice"
        >
          <Card className={clsx(fontSerif.className, "text-xs md:text-xl")}>
            <CardBody>
              Fiecare locație propune activități unice, combinând relaxarea cu
              aventura, cultura și exerciții de dezvoltare a echipei.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="facilitati-vaste"
          className="text-xs md:text-xl"
          title="Facilități vaste"
        >
          <Card className={clsx(fontSerif.className, "text-xs md:text-xl")}>
            <CardBody>
              Cazările variază de la tradițional la modern, cu facilități pentru
              relaxare, întâlniri corporative și experiențe în aer liber.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="bogatie-culturala"
          className="text-xs md:text-xl"
          title="Bogăție culturală"
        >
          <Card className={clsx(fontSerif.className, "text-xs md:text-xl")}>
            <CardBody>
              Locațiile Complexului Armenopolis încorporează tradiții românești,
              oferind o vizionare a patrimoniului local alături de activități de
              team building.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="frumusetea-Naturala"
          className="text-xs md:text-xl"
          title="Frumusețea Naturală"
        >
          <Card className={clsx(fontSerif.className, "text-xs md:text-xl")}>
            <CardBody>
              Situate în peisaje naturale impresionante, aceste locații oferă un
              cadru care îmbunătățește coeziunea echipei și oferă o pauză de la
              rutină.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="activitati-spirituale"
          className="text-xs md:text-xl"
          title="Activități spirituale de sacroterapie"
        >
          <Card className={clsx(fontSerif.className, "text-xs md:text-xl")}>
            <CardBody>
              La Hotel Armenopolis se afla Paraclisul Sfintei Cecilia, unde cine
              doreste, poate sa mediteze la moastele Sfintei care este
              Ocrotitoarea muzicienilor si ajutatoarea celor ce nu se pot
              casatorii.
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="experiente-personalizabile"
          className="text-xs md:text-xl"
          title="Experiențe personalizabile"
        >
          <Card className={clsx(fontSerif.className, "text-xs md:text-xl")}>
            <CardBody>
              Locațiile oferă servicii personalizate pentru a se potrivi
              nevoilor corporative, asigurând un eveniment de team building
              memorabil și eficient.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </main>
  );
}
