"use client";

import clsx from "clsx";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import {
  armenopolisCamera,
  armenopolisCamera2,
  armenopolisCameraEtaj,
  karol4,
  karol5,
  karol6,
  karol8,
  reginaMariaCamera,
  room12_1,
  room3_1,
  room6_1,
} from "@/public/images/images";
import { fontSans, fontSerif } from "@/config/fonts";

export default function CazarePage() {
  return (
    <main className="flex flex-col items-center gap-12">
      <h1
        className={clsx(
          fontSans.className,
          "text-4xl md:text-6xl font-bold text-center",
        )}
      >
        Opțiuni de cazare
      </h1>
      <h1
        className={clsx(
          fontSans.className,
          "text-xl md:text-4xl font-bold text-center",
        )}
      >
        Hotel Armenopolis
      </h1>
      <section className="flex justify-center gap-4 flex-wrap">
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera single"
              className="object-cover rounded-xl"
              height={160}
              src={room12_1.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              350 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ SINGLE
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera dubla"
              className="object-cover rounded-xl"
              height={160}
              src={karol8.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              400 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ DUBLĂ
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera twin"
              className="object-cover rounded-xl"
              height={160}
              src={armenopolisCameraEtaj.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              450 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ TWIN
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera deluxe"
              className="object-cover rounded-xl"
              height={160}
              src={armenopolisCamera.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              450 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ DELUXE
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera dubla deluxe"
              className="object-cover rounded-xl"
              height={160}
              src={armenopolisCamera2.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              600 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ DUBLĂ DELUXE
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
      </section>
      <Divider />
      <h1
        className={clsx(
          fontSans.className,
          "text-xl md:text-4xl font-bold text-center",
        )}
      >
        Hotel Karol
      </h1>
      <section className="flex justify-center gap-4 flex-wrap">
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Dormitorul Regelui"
              className="object-cover rounded-xl"
              height={160}
              src={karol5.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              750 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              DORMITORUL REGELUI
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Dormitorul Reginei"
              className="object-cover rounded-xl"
              height={160}
              src={karol6.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              750 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              DORMITORUL REGINEI
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera Deluxe"
              className="object-cover rounded-xl"
              height={160}
              src={karol4.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              500 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ DELUXE
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera dubla traditionala"
              className="object-cover rounded-xl"
              height={160}
              src={room3_1.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              450 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ DUBLĂ TRADIȚIONALĂ
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Camera tripla"
              className="object-cover rounded-xl"
              height={160}
              src={room6_1.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              550 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              CAMERĂ TRIPLĂ
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
      </section>
      <Divider />
      <h1
        className={clsx(
          fontSans.className,
          "text-xl md:text-4xl font-bold text-center",
        )}
      >
        Micul Palat Regina Maria
      </h1>
      <section className="flex justify-center gap-4 flex-wrap">
        <Card className="py-4 w-96">
          <CardHeader className="pt-2 px-4 flex-col items-center">
            <Image
              alt="Apartament"
              className="object-cover rounded-xl"
              height={160}
              src={reginaMariaCamera.src}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2 gap-4">
            <p
              className={clsx(
                fontSans.className,
                "text-3xl uppercase font-bold",
              )}
            >
              1250 RON
            </p>
            <p
              className={clsx(
                fontSans.className,
                "text-xl text-default-500 uppercase font-bold",
              )}
            >
              APARTAMENT
            </p>
            <Button
              as={Link}
              className="text-lg font-normal text-default-600 bg-default-100"
              href="/contact"
              variant="flat"
            >
              Rezervă acum &rarr;
            </Button>
          </CardBody>
        </Card>
      </section>
      <article
        className={clsx(fontSerif.className, "my-8 text-xl text-center")}
      >
        În cazul grupurilor se face ofertă personalizată în funcție de
        serviciile solicitate.
      </article>
    </main>
  );
}
