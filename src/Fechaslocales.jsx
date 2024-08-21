import React from 'react'
import './fechaslocales.scss'
import ruli from './assets/galeria/galeria1.jpeg'
const Fechaslocales = () => {
  return (
    <div className='timeline mx-auto'>
        <section className='card__historia'>
          <div className='circulo'></div>
          <img src={ruli} alt="" />
          <h3>Febrero</h3>
          <p>El "Festival Provincial de la Palma" se celebra cada febrero en San Francisco del Chañar desde hace 40 años. Este evento es uno de los encuentros artísticos y culturales más importantes del norte de Córdoba, destacando la palma caranday, una especie endémica de la zona que ha sido parte de la economía regional y la cestería artesanal. Además de la música y la danza, el festival ofrece gastronomía típica como empanadas, locro, asado y cabritos, atrayendo a turistas y garantizando dos noches de disfrute. El festival se ha convertido en un escenario importante para la cultura local y regional.
          </p>
        </section>

        <section className='card__historia'>
          <div className='circulo'></div>
          <img src={ruli} alt="" />
          <h3>24 de Julio</h3>
          <p> Cada  24 de julio  se celebran las fiestas patronales homenajeando a San francisco Solano, santo franciscano  para   el cual la localidad   levanta  su   iglesia “la catedral del norte” en su honor y que se irgue imponente mostrando su figura a la distancia y convirtiéndola en la imagen más representativa de la localidad.<br/>
          Para esta fecha el pueblo realiza diferentes actividades tales como la serenata a San francisco Solano en donde músicos, bailarines y poetas  a las cero hora del día 24 se disponen a saludar a su patrono en el templo ofreciéndole su arte, durante todo  el día la plaza central es escenario de una gran feria y las  calles del  pueblo se colman de feligreses para la realización de   su  masiva procesión llevando la imagen del santo  por las calles del pueblo,  para cerrar la jornada con el tradicional “baile de las patronales”.

          </p>
        </section>

        <section className='card__historia'>
          <div className='circulo'></div>
          <img src={ruli} alt="" />
          <h3>14 de Agosto</h3>
          <p>San Francisco del Chañar cuenta con 246 años  historia  desde su fundación el 14 de agosto de 1778, momento  en el que los esposos Francisco Antonio Lezcano  y María Josefa Bustamante cedieran su tierra  por testamento para su emplazamiento. <br/>
          Ya que se encuentra situada a la vera del Camino Real con sus postas, ruta obligada desde tiempos del virreinato. Su presencia y relevancia  en el escenario histórico de nuestro país  es muy importante, siendo esto una de las grandes consignas a la hora del festejo  de su aniversario, en el  cual el pueblo realiza diversas actividades desde horas tempranas del día, que luego del acto protocolar en la plaza central y el tradicional desfile,  comienza a transitar una jornada entre muestras históricas/cultuales, exposición de artesanos locales, feria,  presentaciones musicales y de academias de danza, que hacen de esta fecha un momento esperado para todos sus habitantes y una muy buena propuesta para los visitantes

          </p>
        </section>

        <section className='card__historia'>
          <div className='circulo'></div>
          <img src={ruli} alt="" />
          <h3>24 de Diciembre</h3>
          <p>Cada 24 de diciembre y desde muy temprano promesantes comienzan a recorrer los 22 kilómetros que dividen la localidad con el paraje los Cerrillos para buscar la imagen del niño Dios  transitando un camino de tierra entre el paisaje agreste, montes palmerales  y el sonido de los bombos que con un ritmo único y característico marcan el paso de los fieles. El recorrido de cuarenta y cuatro kilómetros (ida y vuelta) culmina con el ingreso del niño al pueblo mientras anochece  acompañado por una multitud entre vecinos, visitantes y gauchos de a caballo, dando lugar a vivir un momento de gran intensidad religiosa, un acto de fe que se repite desde hace muchísimos años y culmina con el paso de jinetes y caballos frente al templo, dejando como un cuadro en las retinas   una imagen  que para quie lo presencia  por primera vez, será  muy difícil de olvidar.
          </p>
        </section>
    </div>
  )
}

export default Fechaslocales