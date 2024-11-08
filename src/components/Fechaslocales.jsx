import React, { useState } from 'react'
import './fechaslocales.scss'
import festival from '../assets/fechasTradicionales/festival.jpg'
import patronales from '../assets/fechasTradicionales/patronales.jpg'
import chanar from '../assets/fechasTradicionales/chanar.jpeg'
import ninoDios from '../assets/fechasTradicionales/ninoDios.jpg'
import banner from "../assets/bannerFechas.jpg";

function LeerMas({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 200; // Número de caracteres a mostrar antes de truncar

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    
    <div>
      <p className='mx-md-auto '>{isExpanded ? text : `${text.slice(0, previewLength)}...`}</p>
      <button className="ver__mas" onClick={handleToggle}>
        {isExpanded ? 'Leer menos' : 'Leer más'}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
      </svg>
      </button>
    </div>
  );
}

const Fechaslocales = () => {
  const tarjetasData = [
    {
      id: 1,
      titulo:"Febrero",
      text: 'El "Festival Provincial de la Palma" se celebra cada febrero en San Francisco del Chañar desde hace 40 años. Este evento es uno de los encuentros artísticos y culturales más importantes del norte de Córdoba, destacando la palma caranday, una especie endémica de la zona que ha sido parte de la economía regional y la cestería artesanal. Además de la música y la danza, el festival ofrece gastronomía típica como empanadas, locro, asado y cabritos, atrayendo a turistas y garantizando dos noches de disfrute. El festival se ha convertido en un escenario importante para la cultura local y regional.',
      img:festival,
    },
    {
      id: 2,
      titulo: "24 de Julio",
      text: 'Cada  24 de julio  se celebran las fiestas patronales homenajeando a San francisco Solano, santo franciscano  para   el cual la localidad   levanta  su   iglesia “la catedral del norte” en su honor y que se irgue imponente mostrando su figura a la distancia y convirtiéndola en la imagen más representativa de la localidad. Para esta fecha el pueblo realiza diferentes actividades tales como la serenata a San francisco Solano en donde músicos, bailarines y poetas  a las cero hora del día 24 se disponen a saludar a su patrono en el templo ofreciéndole su arte, durante todo  el día la plaza central es escenario de una gran feria y las  calles del  pueblo se colman de feligreses para la realización de   su  masiva procesión llevando la imagen del santo  por las calles del pueblo,  para cerrar la jornada con el tradicional “baile de las patronales”',
      img:patronales,
    },
    {
      id: 3,
      titulo:"14 de Agosto",
      text: "San Francisco del Chañar cuenta con 246 años  historia  desde su fundación el 14 de agosto de 1778, momento  en el que los esposos Francisco Antonio Lezcano  y María Josefa Bustamante cedieran su tierra  por testamento para su emplazamiento. Ya que se encuentra situada a la vera del Camino Real con sus postas, ruta obligada desde tiempos del virreinato. Su presencia y relevancia  en el escenario histórico de nuestro país  es muy importante, siendo esto una de las grandes consignas a la hora del festejo  de su aniversario, en el  cual el pueblo realiza diversas actividades desde horas tempranas del día, que luego del acto protocolar en la plaza central y el tradicional desfile,  comienza a transitar una jornada entre muestras históricas/cultuales, exposición de artesanos locales, feria,  presentaciones musicales y de academias de danza, que hacen de esta fecha un momento esperado para todos sus habitantes y una muy buena propuesta para los visitantes",
      img:chanar,
    },
    {
      id: 4,
      titulo: "24 de Diciembre",
      text: "Cada 24 de diciembre y desde muy temprano promesantes comienzan a recorrer los 22 kilómetros que dividen la localidad con el paraje los Cerrillos para buscar la imagen del niño Dios  transitando un camino de tierra entre el paisaje agreste, montes palmerales  y el sonido de los bombos que con un ritmo único y característico marcan el paso de los fieles. El recorrido de cuarenta y cuatro kilómetros (ida y vuelta) culmina con el ingreso del niño al pueblo mientras anochece  acompañado por una multitud entre vecinos, visitantes y gauchos de a caballo, dando lugar a vivir un momento de gran intensidad religiosa, un acto de fe que se repite desde hace muchísimos años y culmina con el paso de jinetes y caballos frente al templo, dejando como un cuadro en las retinas   una imagen  que para quie lo presencia  por primera vez, será  muy difícil de olvidar.",
      img:ninoDios,
    }
  ];

  return (
    <>
      <section className="banersNP">
        <img
          src={banner}
          alt="Iglesia San Francisco Solano"
          width="100%"
        />
        <div></div>
        <h1 className="w-100 text-center">Fechas Tradicionales</h1>
      </section>
      <div className='timeline mx-auto'>
        {tarjetasData.map((tarjeta) => (
          <section className='card__historia'>
            <div key={tarjeta.id} className="tarjeta">
            <div className='circulo'></div>
            <img src={tarjeta.img} alt="" />
            <h3>{tarjeta.titulo}</h3>
            <LeerMas text={tarjeta.text} />
          </div>
          </section>
        ))}
          
      </div>
    </>
  )
}

export default Fechaslocales