import './fechaslocales.scss'
import LeerMas from './Leermas.jsx'
import festival from '../assets/fechasTradicionales/festival.jpg'
import patronales from '../assets/fechasTradicionales/patronales.jpg'
import chanar from '../assets/fechasTradicionales/chanar.jpeg'
import ninoDios from '../assets/fechasTradicionales/ninoDios.jpg'
import independencia from '../assets/fechasTradicionales/independencia.webp'
import panchoRamirez from '../assets/fechasTradicionales/panchoRamirez.jpg'
import cicloTour from '../assets/fechasTradicionales/cicloTour.webp'
import cafeLiterario from '../assets/fechasTradicionales/cafeLiterario.webp'
import virgen from '../assets/fechasTradicionales/virgen.webp'
import prepalma from '../assets/fechasTradicionales/prepalma.webp'
import banner from "../assets/bannerFechas.jpg";


const Fechaslocales = () => {
  const tarjetasData = [
    {
      id: 1,
      titulo:"Festival Provincial de la Palma",
      text: 'El "Festival Provincial de la Palma" se celebra cada febrero en San Francisco del Chañar desde hace 40 años. Este evento es uno de los encuentros artísticos y culturales más importantes del norte de Córdoba, destacando la palma caranday, una especie endémica de la zona que ha sido parte de la economía regional y la cestería artesanal. Además de la música y la danza, el festival ofrece gastronomía típica como empanadas, locro, asado y cabritos, atrayendo a turistas y garantizando dos noches de disfrute. El festival se ha convertido en un escenario importante para la cultura local y regional.',
      img:festival,
      fecha:"Febrero"
    },
    {
      id: 2,
      titulo:"Ciclotour del Camino Real",
      text: 'Cada mes de abril, San Francisco del Chañar se convierte en escenario de una aventura única sobre ruedas. Una experiencia que combina naturaleza, historia y deporte, en recorridos de distintos kilómetros que varían año a año. Rodeado de paisajes autóctonos y buena compañía, el ciclotour invita a pedalear en armonía con el entorno, descubriendo la riqueza cultural y natural de nuestra región.Una propuesta para adolescentes y adultos, ideal para disfrutar en grupo o en familia, con paradas interpretativas, acompañamiento técnico y cierre con merienda campestre.',
      img:cicloTour,
      fecha:"Abril"
    },
    {
      id: 3,
      titulo: 'Café Literario “Tinkuy Yuyay”',
      text: 'Café Literario “Tinkuy Yuyay”. Cada mes de mayo, San Francisco del Chañar se llena de palabras, historias y creatividad con el Café Literario “Tinkuy Yuyay” —un espacio cálido de encuentro entre lectores, escritores y aficionados a la lectoescritura.Con merienda compartida, lectura de autores locales y un taller de escritura creativa, esta propuesta busca reunir pensamientos, emociones y memorias que habitan en quienes disfrutan expresarse con palabras. Un evento íntimo, con cupos limitados, ideal para quienes desean descubrir nuevas voces o animarse a escribir por primera vez.',
      img:cafeLiterario,
      fecha:"Mayo"
    },
    {
      id: 4,
      titulo: "Fiesta de la Independencia",
      text: 'Festejo del 9 de Julio – Día de la Independencia. Cada 9 de julio, San Francisco del Chañar celebra con orgullo y emoción una de las fechas más significativas de nuestra historia nacional.La jornada comienza con un acto protocolar, en el que se rinde homenaje a los héroes de la independencia argentina, seguido de un imponente desfile de agrupaciones gauchas. Luego, el festejo patrio se traslada al Hipódromo Municipal, donde se disfruta de una jornada cargada de tradición: comidas típicas, presentaciones de academias de danzas, destrezas gauchas, juegos tradicionales y música en vivo. Una verdadera fiesta de la independencia que reúne a toda la comunidad y se extiende durante todo el día.',
      img:independencia,
      fecha:"9 de Julio"
    },
    {
      id: 5,
      titulo: "Acto protocolar fallecimiento de Francisco “Pancho” Ramírez",
      text: 'Acto Homenaje a Francisco “Pancho” Ramírez – Cada 10 de julio por la mañana, en el paraje San Carlos de la Esquina —sitio histórico donde se registra la muerte del caudillo entrerriano Francisco “Pancho” Ramírez— se lleva a cabo un emotivo acto en su memoria.Frente al monumento que lo honra, autoridades de las provincias de Entre Ríos y Córdoba, junto a agrupaciones gauchas, representantes institucionales y público en general, se reúnen para rendir homenaje a una de las figuras más emblemáticas del federalismo argentino.La ceremonia incluye acto protocolar, palabras alusivas, ofrendas florales, presencia de banderas de ceremonia y escoltas a caballo, participación de academias de danzas, entrega de placas, entre otras; en un gesto que reafirma el valor de la historia compartida entre pueblos hermanos.',
      img:panchoRamirez,
      fecha:"10 de Julio"
    },
    {
      id: 4,
      titulo: "Fiestas patronales",
      text: 'Cada  24 de julio  se celebran las fiestas patronales homenajeando a San francisco Solano, santo franciscano  para   el cual la localidad   levanta  su   iglesia “la catedral del norte” en su honor y que se irgue imponente mostrando su figura a la distancia y convirtiéndola en la imagen más representativa de la localidad. Para esta fecha el pueblo realiza diferentes actividades tales como la serenata a San francisco Solano en donde músicos, bailarines y poetas  a las cero hora del día 24 se disponen a saludar a su patrono en el templo ofreciéndole su arte, durante todo  el día la plaza central es escenario de una gran feria y las  calles del  pueblo se colman de feligreses para la realización de   su  masiva procesión llevando la imagen del santo  por las calles del pueblo,  para cerrar la jornada con el tradicional “baile de las patronales”',
      img:patronales,
      fecha:"24 de Julio"
    },
    {
      id: 5,
      titulo:"Fundacion del pueblo",
      text: "San Francisco del Chañar cuenta con 246 años  historia  desde su fundación el 14 de agosto de 1778, momento  en el que los esposos Francisco Antonio Lezcano  y María Josefa Bustamante cedieran su tierra  por testamento para su emplazamiento. Ya que se encuentra situada a la vera del Camino Real con sus postas, ruta obligada desde tiempos del virreinato. Su presencia y relevancia  en el escenario histórico de nuestro país  es muy importante, siendo esto una de las grandes consignas a la hora del festejo  de su aniversario, en el  cual el pueblo realiza diversas actividades desde horas tempranas del día, que luego del acto protocolar en la plaza central y el tradicional desfile,  comienza a transitar una jornada entre muestras históricas/cultuales, exposición de artesanos locales, feria,  presentaciones musicales y de academias de danza, que hacen de esta fecha un momento esperado para todos sus habitantes y una muy buena propuesta para los visitantes",
      img:chanar,
      fecha:"14 de Agosto"
    },
    /* {
      id: 6,
      titulo: "Chañar pinta en primavera",
      text: "Encuentro de Pintores “Chañar pinta en primavera”. Cada mes de septiembre, cuando la primavera comienza a florecer en el norte cordobés, San Francisco del Chañar se llena de color, inspiración y arte con el Encuentro de Pintores “Chañar pinta en primavera”. Artistas de distintas localidades llegan con sus pinceles y lienzos para interpretar los paisajes, las calles, las casonas y los rincones más emblemáticos del pueblo. A cielo abierto, en plazas, patios y caminos, se crea una galería viva donde el arte sucede en tiempo real. El evento rinde homenaje a grandes artistas como Fernando Fader y Malanca, quienes alguna vez pasaron por estas tierras dejando huella en la historia del arte argentino. Durante el encuentro se realizan charlas, recorridos guiados, exposiciones colectivas y una ceremonia final con entrega de certificados. Es una oportunidad única para conectar con el arte, con la naturaleza y con la identidad cultural del pueblo.",
      img:ninoDios,
      fecha:"Septiembre"
    }, */
    {
      id: 6,
      titulo: "Pre Palma – Certamen de Música Folclórica",
      text: "Durante el mes de noviembre, San Francisco del Chañar se convierte en el escenario del Pre Palma, el certamen musical que abre las puertas del Festival Provincial de la Palma. Este evento reúne a talentos emergentes del folclore argentino, provenientes de distintos puntos de la provincia y la región, en una competencia vibrante donde la música, la identidad y la tradición se dan la mano. Con entrada libre y una destacada grilla de artistas participantes, el Pre Palma no solo busca reconocer a nuevos exponentes del género, sino también revivir el espíritu festivalero que caracteriza al norte cordobés. El certamen cuenta con un jurado especializado, servicio de buffet, stands culturales y presentaciones artísticas invitadas que animan la jornada. Los ganadores tendrán su lugar asegurado en el escenario mayor del Festival de la Palma, representando a la nueva generación del folclore.",
      img:prepalma,
      fecha:"Noviembre"
    },
    {
      id: 6,
      titulo: "Peregrinación Virgen del Valle",
      text: "Cada 8 de diciembre, desde hace más de 50 años, el pueblo de San Francisco del Chañar se une en una de sus manifestaciones de fe más profundas y emotivas: la Peregrinación de la Virgen del Valle. La jornada comienza temprano, cuando la imagen de la Virgen parte desde la casa de la familia Córdoba, en calle Belgrano. Acompañada por fieles devotos, la procesión recorre caminos de tierra y senderos del monte rumbo a La Cañada, patio de la familia Sánchez, donde se celebra una verdadera jornada de encuentro y espiritualidad. Durante el día, los creyentes comparten juegos tradicionales como la taba, bailes, música y comidas típicas, en un clima de comunidad, alegría y respeto por la Virgen. Entrada la tarde, cerca de las 19 horas, se inicia el regreso en procesión hacia la Iglesia San Francisco Solano, conocida como la Catedral del Norte, donde se celebra una emotiva misa en su honor. En la procesión, cientos de personas a pie, a caballo y en vehículos se suman al paso de la Virgen, muchas veces desde la entrada del pueblo. Además, otras imágenes acompañan esta peregrinación, convirtiéndola en una expresión viva de devoción popular. Al finalizar, la imagen retorna a la casa de la familia Córdoba, donde descansará hasta el año siguiente. Esta celebración no solo mantiene viva la fe, sino también el sentido de pertenencia, memoria y unión del pueblo.",
      img:virgen,
      fecha:"8 de Diciembre"
    },
    {
      id: 7,
      titulo: "Peregrinacion del niño Dios",
      text: "Cada 24 de diciembre y desde muy temprano peregrinos comienzan a recorrer los 22 kilómetros que dividen la localidad con el paraje los Cerrillos para buscar la imagen del niño Dios  transitando un camino de tierra entre el paisaje agreste, montes palmerales  y el sonido de los bombos que con un ritmo único y característico marcan el paso de los fieles. El recorrido de cuarenta y cuatro kilómetros (ida y vuelta) culmina con el ingreso del niño al pueblo mientras anochece  acompañado por una multitud entre vecinos, visitantes y gauchos de a caballo, dando lugar a vivir un momento de gran intensidad religiosa, un acto de fe que se repite desde hace muchísimos años y culmina con el paso de jinetes y caballos frente al templo, dejando como un cuadro en las retinas   una imagen  que para quie lo presencia  por primera vez, será  muy difícil de olvidar.",
      img:ninoDios,
      fecha:"24 de Diciembre"
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
            <div className='circulo'>
              <small className='fecha text-center d-none d-md-block'>{tarjeta.fecha}</small>
            </div>
            <img src={tarjeta.img} alt="" />
            <h3 className='py-2 fs-4 fs-md-5'>{tarjeta.titulo}</h3>
            <LeerMas text={tarjeta.text} />
          </div>
          </section>
        ))}
          
      </div>
    </>
  )
}

export default Fechaslocales