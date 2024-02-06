import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const Medellin = () => {
  return (
    <>
    <img src="src/assets/images/Medellin/Concrete Wall_Medellin.png" alt="concrete wall" />
    <div>
      <div className="m-auto w-1/2 my-16">
        <p className="text-5xl font-bold">Medellín</p>
        <p className="text-lg font-bold mb-8">neues Erscheinungsbild der Stadt Medellin</p>
        <div className="w-[825px] columns-2 ">
          <p className="mb-8">
            Die Stadt Medellín in Kolumbien hat ein Imageproblem, obwohl sich in den vergangenen Jahren viel verändert hat. Weltweit verbinden Menschen den Ort nur mit dem Drogenhändler Pablo Escobar, Mord, Drogenkartellen und Armut. Aus diesem Grund war das Ziel des Projekts ein neues Erscheinungsbild für Medellín zu entwickeln. 
            <br /><br />
            Das Erscheinungsbild setzt sich aus den wichtigsten Elementen der Stadt zusammen: Kultur, Architektur, Natur und Berge, die die Stadt umgeben. Jedes Element wird durch eine eigene Form und Farbe dargestellt. 
            <br /><br />
            Die vier Formen entstanden als abstrakte Repräsentation des jeweiligen Elements. Die Farben sind aus dem bunten Stadtbild hergeleitet. Die Zusammensetzung der Formen mit unterschiedlichen Farben bilden ein Grundelement für den Stil, der für das Logo und die Illustrationen entwickelt wurde.
            Für die Besucher der Stadt wurden eine App mit zahlreichen Informationen über die Stadt und aktuelle Events, Postkarten, Plakate sowie verschiedene Stadtpläne mit entsprechenden Highlights und Sehenswürdigkeiten entwickelt.
          </p>
        <img src="src/assets/images/Medellin/Elemente_Medellin.png" alt="elements" />
      </div>
      </div>
      <div className="flex justify-center flex-wrap gap-16 mb-16">
        <img src="src/assets/images/Medellin/Airport_Medellin.png" alt="airport poster" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Plakat_01.jpg" alt="bus stop poster" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Postkarte_01.jpg" alt="postcard 1" className="h-[225px] w-[350px] rotate-90"/>
        <img src="src/assets/images/Medellin/Postkarte_02.jpg" alt="postcard 2" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Postkarte_03.jpg" alt="postcard 3" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Postkarte_04.jpg" alt="postcard 4" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Postkarte_05.jpg" alt="postcard 5" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Plakat_05.jpg" alt="posters" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Straßenkarte_01.jpg" alt="folded map" className="h-[225px] w-[350px]"/>
        <img src="src/assets/images/Medellin/Airport_Medellin.png" alt="airport poster" className="h-[225px] w-[350px]"/>
      </div>
    </div>
    <img src="src/assets/images/Medellin/Concrete Wall_Medellin.png" alt="concrete wall" />
    <div className="flex justify-between items-center py-8 m-auto w-1/2">
      <a className="invisible"><FontAwesomeIcon icon={faArrowLeft} size="xl"/></a>
      <a href="/#projects" reloadDocument className="hover:text-gray-700">Projects</a>
      <a href="/feria-de-las-flores"><FontAwesomeIcon icon={faArrowRight} size="xl"/></a>
    </div>
    </>
  )
}

export default Medellin