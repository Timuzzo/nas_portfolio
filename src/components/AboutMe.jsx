
const AboutMe = () => {
  return (
    <>
    <div className="flex flex-col items-center mb-16 gap-8 sm:w-[900px] sm:m-auto sm:items-start sm:mb-16">
      <p className="text-5xl font-bold w-mobile">About me</p>
      <div className="flex flex-col sm:flex-row gap-8">
        <img src="src/assets/images/Aboutme.jpg" alt="photo" className="w-mobile h-[450px]"/>
        <p className="w-mobile sm:w-[500px]">
          Moin, 
          <br /><br />
          ich bin Natalia, gebürtige Kolumbianerin, aber aktuell ist Hamburg meine Wahlheimat. Als Kommunikations- und Produktdesignerin fokussiere ich mich auf Corporate Branding, Corporate Design, Markenentwicklung und Verpackungsdesign. 
          <br /><br />
          Motiviert und inspiriert von klarer, modularer und plakativer Ästhetik. In den letzten Jahren habe ich an Projekten gearbeitet, die die Bereiche Brand-, Produkt- und Kampagnendesign umfassen.
          <br /><br />
          Mein gestalterisches Know-how ist medienübergreifend. Statt nur medienorientiert zu denken, gestalte ich möglichst lösungsorientiert. Mit Typografie, Bildsprache und den Einfluss von aktuellen Designtrends. Mit hohem Designanspruch und intelligenten Ideen entstehen so zukunftsorientierte Kommunikationskonzepte.
          <br /><br />
          Mein Ziel: Marken und Produkten einen besonderen Charakter zu verleihen.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-4xl font-bold">Berufserfahrung</p>
        <div className="flex flex-col sm:flex-row gap-8">
          <p className="w-mobile">
            07.2023 - dato
            <br />
            Mediaplus Group
          </p>
          <p>
            Junior Creative Art
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <p className="w-mobile">
            04.2022 - 12.2022
            <br />
            Speicherstadt Kaffeerösterei
          </p>
          <p>
            Marketing & Design
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <p className="w-mobile">
            11.2020 - 01.2021
            <br />
            wahrschau hamburg 
            <br />
            Agentur für Kommunikation GmbH
          </p>
          <p>
            Werkstudentin im Grafik Design
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <p className="w-mobile">
            04.2017 - 08.2017
            <br />
            Studio Elfenbein GmbH & Co.
          </p>
          <p>
            Praktikum im Packaging- & Corporate Design
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-4xl font-bold">Studium</p>
        <div className="flex flex-col sm:flex-row gap-8">
          <p className="w-mobile">
            Master of Arts
            <br />
            FH Aachen
          </p>
          <p>
            Kommunikations- und Produktdesign
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <p className="w-mobile">
            Bachelor of Arts 
            <br />
            HAWK Hildesheim
            <br />
            UPB Medellín
          </p>
          <p>
            Doppelabschluss
            <br/>
            Produktdesign & Industriedesign
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe