export default function DesprePage() {
  return (
    <main className="flex flex-col md:flex-row gap-4 text-left justify-center items-center w-full md:h-4/6 text-sm md:text-2xl md:my-6 md:gap-12">
      <div className="flex flex-col gap-4 md:w-5/6 md:gap-6">
        <span className="text-2xl md:text-5xl text-default-600">Camere</span>
        <article>
          Pentru un confort sporit, sunt oferite articole de toaletă și halate,
          alături de un bideu și dușuri.
        </article>
        <span className="text-2xl md:text-5xl text-default-600">
          Mâncare și băuturi
        </span>
        <article>
          Restaurantul din apropierea Mănăstirii Nicula este la aproximativ 4,6
          km distanță.
        </article>
        <section className="flex flex-col md:flex-row gap-4">
          <section className="flex flex-col gap-4 md:gap-6">
            <span className="text-2xl md:text-5xl text-default-600">
              Locație
            </span>
            <article>
              Centrul orașului Gherla poate fi accesat în 5 minute de mers pe
              jos. Apartamentul din Gherla este destul de aproape de Sinagoga
              din Gherla. Hotelul din Gherla este situat la aproximativ 4,6 km
              de Mănăstirea Nicula, iar autogara Gherla se află la doar 300 de
              metri. Hotel Karol din Gherla este la 40 km de Aeroportul
              Internațional Avram Iancu Cluj.
            </article>
          </section>
        </section>
      </div>
      <section className="w-full h-72 md:h-full">
        <iframe
          className="w-full h-full md:h-full"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Armenopolis,%20Gherla%20405300,%20Romania+(Hotel%20Karol)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Locație"
        />
      </section>
    </main>
  );
}
