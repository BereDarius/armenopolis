export default function ContactPage() {
  return (
    <main
    // className="flex flex-col md:flex-row gap-4 text-left justify-center items-center w-full md:h-4/6 text-sm md:text-2xl md:my-6 md:gap-12"
    >
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Contactează-ne</h1>
        <p>
          Email:{" "}
          <a href="mailto:gherlaccdp@yahoo.com" className="text-blue-600">
            gherlaccdp@yahoo.com
          </a>
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:+40723946272" className="text-blue-600">
            0723946272
          </a>
        </p>
        <p>Adresă: Str. Mihai Viteazu, Gherla, România</p>
        <iframe
          allowFullScreen
          className="w-full h-64 mt-6"
          loading="lazy"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Armenopolis,%20Gherla%20405300,%20Romania+(Hotel%20Karol)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Locatie"
        />
      </div>
    </main>
  );
}
