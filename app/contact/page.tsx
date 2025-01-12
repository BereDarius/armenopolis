import { Link } from "@nextui-org/link";
import React from "react";

import { FacebookIcon, InstagramIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <main className="flex flex-col md:flex-row md:px-24 gap-8 text-left items-center w-full md:h-4/6 text-sm md:text-xl md:my-6 md:gap-0 pt-24">
      <div className="flex flex-col gap-4 md:w-5/6 md:gap-6">
        <span className="text-2xl md:text-5xl text-default-600">
          ✉️ E-mail:
        </span>
        <Link
          className="text-blue-600 hover:underline text-xl"
          href="mailto:gherlaccdp@yahoo.com"
          isExternal={true}
        >
          gherlaccdp@yahoo.com
        </Link>
        <span className="text-2xl md:text-5xl text-default-600">
          📞 Telefon:
        </span>
        <Link
          className="text-blue-600 hover:underline text-xl"
          href="tel:+40723946272"
          isExternal={true}
        >
          +40 723 946 272
        </Link>
        <Link
          className="text-blue-600 hover:underline text-xl"
          href="tel:+40721120120"
          isExternal={true}
        >
          +40 721 120 120
        </Link>
        <span className="text-2xl md:text-5xl text-default-600">
          📆 Program:
        </span>
        <span>Luni - Vineri: 8 a.m. - 9 p.m.</span>
        <section className="flex flex-col md:flex-row gap-4">
          <section className="flex flex-col gap-4 md:gap-6">
            <span className="text-2xl md:text-5xl text-default-600">
              📍 Adresă:
            </span>
            <article>
              Strada Mihai Viteazu 15
              <br />
              Gherla 405300
              <br />
              România
            </article>
          </section>
        </section>
        <section className="flex flex-col gap-4">
          <span className="text-2xl md:text-5xl text-default-600">
            📱 Social Media:
          </span>
          <section className="flex flex-row gap-4 md:gap-6">
            <Link
              href="https://www.instagram.com/complexhotelierarmenopolis"
              isExternal={true}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.facebook.com/complexhotelierarmenopolis"
              isExternal={true}
            >
              <FacebookIcon />
            </Link>
          </section>
        </section>
      </div>
      <section className="w-full h-72 md:h-full">
        <iframe
          className="w-full h-full md:h-full rounded-2xl"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Armenopolis,%20Gherla%20405300,%20Romania+(Hotel%20Karol)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Locație"
        />
      </section>
    </main>
  );
}
