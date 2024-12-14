import React from "react";

export default function ContactPage() {
  return (
    <main className="flex flex-col md:flex-row md:px-24 gap-8 text-left items-center w-full md:h-4/6 text-sm md:text-2xl md:my-6 md:gap-0">
      <div className="flex flex-col gap-4 md:w-5/6 md:gap-6">
        <span className="text-2xl md:text-5xl text-default-600">
          ✉️ E-mail:
        </span>
        <a
          className="text-blue-600 hover:underline"
          href="mailto:gherlaccdp@yahoo.com"
        >
          gherlaccdp@yahoo.com
        </a>
        <span className="text-2xl md:text-5xl text-default-600">
          📞 Telefon:
        </span>
        <a className="text-blue-600 hover:underline" href="tel:+40723946272">
          0723946272
        </a>
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
