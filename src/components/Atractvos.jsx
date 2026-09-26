import React, { useEffect } from 'react'
import "./atractivos.scss"
import CardAtractivo from './CardAtractivo.jsx'
import iglesia from '../assets/atractivos/iglesia.webp'
import molino from '../assets/atractivos/molino.webp'
import franciscoViejo from '../assets/atractivos/franciscoViejo.webp'
import lasPiedritas from '../assets/atractivos/lasPiedritas.webp'
import pozodeltigre from '../assets/atractivos/pozodeltigre.webp'
import circuito from '../assets/atractivos/circuito.webp'
import portada from '../assets/atractivos/portada.webp'
import caminoReal from '../assets/atractivos/caminoReal.webp'
import laura from '../assets/atractivos/laura.jpeg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Atractvos = () => {
     useEffect(() => {
       Aos.init(); 
    },[]) 
  return (
    <main className='overflow-hidden'>
        <section className='portada__atractivos'>
            <img className="mb-3" src={portada} alt="casona perteneciente al Circuito Historico"/>
            <h1 className="w-100 text-center">ATRACTIVOS TURISTICOS</h1>
        </section>
      <section className='atractivos'>
        
       <CardAtractivo 
            img={iglesia} 
            titulo={"Iglesia San Francisco Solano"} 
            descripcion={"La Iglesia San Francisco Solano, símbolo espiritual y arquitectónico de la localidad, comenzó a tomar forma el 3 de julio de 1890, fecha en la que se firmó el contrato entre la Comisión Directiva Pro-Templo y el constructor Antonio Previato.<br/>Según lo establecido, la obra contemplaba la construcción de un templo de tres naves, con dos sacristías, dos accesos laterales y dos torres, siguiendo los planos previamente presentados y aprobados.<br/>Este proyecto marcó el inicio de una de las edificaciones más emblemáticas de San Francisco del Chañar, que con el paso del tiempo se consolidó como un espacio central de fe, encuentro y vida comunitaria."}
            ubicacion={"https://maps.app.goo.gl/EdcAEPMkkWcrSQjHA"}
        />

        <CardAtractivo 
            img={caminoReal}
            titulo={"Camino Real"} 
            descripcion={"El Camino Real al Alto Perú fue una de las rutas más importantes de Sudamérica durante la época colonial. Atraviesa el corazón de San Francisco del Chañar, uniendo historia, paisajes y memoria viva. Por este antiguo sendero de tierra transitaron virreyes, patriotas, comerciantes, viajeros y tropas independentistas que forjaron el destino del país.<br/>Este trayecto conserva postas, capillas, construcciones de adobe y huellas del pasado, entre ellas la Posta Las Piedritas, Posta Pozo del Tigre y sitios conmemorativos como el Monumento a Pancho Ramírez. Hoy se puede recorrer en caminatas, a caballo, en ciclotours o caravanas culturales, redescubriendo su valor histórico y paisajístico.<br/>El Camino Real no solo es un vestigio del pasado: es una experiencia que conecta a quienes lo recorren con los orígenes de nuestra identidad, entre palmares, llanuras y relatos que siguen vivos en la voz de los pueblos."}
        />

        <CardAtractivo 
            img={molino}
            titulo={"Monumento Piedra de Molino Harinero"} 
            descripcion={"Ubicado en la actual calle San Martín casi esquina Mariano Moreno. Funcionó hasta finales del siglo IXX y aun se conserva en la plaza central una de las piedras que cumplían dicha labor."}
            ubicacion={"https://maps.app.goo.gl/5xThwBPBR7wCVpxz5"}
        />
        
        <CardAtractivo 
            img={circuito}
            titulo={"Circuito Historico"} 
            descripcion={`Ubicado sobre la actual calle Sarmiento (Antiguo Camino Real) General Paz, San Martín, Belgrano,Mariano Moreno y Rivadavia. Comprendidas entre éstas calles céntricas encontramos las antiguas casonas de Adobe, con sus aljibes, portales y zaguanes, testigos de los viejos tiempos.<br/>
            Aquí nos detenemos a ver las construcciones históricas, molino harinero, guardia Civil, antigua herreria, Catedral del Norte, y la antigua técnica de construcción del adobe, con paredes que llegan al metro de ancho, techos altos de caña y tejas. Acompañan el recorrido un amplio número de Algarrobos centenarios que proveían de preciada sombra tanto para personas como para animales. `}
        />

        <CardAtractivo 
            img={franciscoViejo}
            titulo={"Monumento a Francisco Ramirez"} 
            descripcion={`En las cercanías de Villa de María del Río Seco, el caudillo entrerriano Francisco "Pancho" Ramírez fue capturado y asesinado tras enfrentarse a las tropas de Santa Fe y Córdoba. Perseguido por fuerzas comandadas por Francisco Bedolla, Ramírez descansó brevemente en la zona antes de ser sorprendido por las tropas santafesinas el 10 de julio. Aunque logró rescatar a su compañera Delfina, perdió la vida en el intento. Su cabeza fue exhibida en la plaza pública y enviada al gobernador de Santa Fe, Estanislao López, como prueba de la misión cumplida.`}
            ubicacion={"https://maps.app.goo.gl/SwTrXKeTABdVL4hZ9"}
            
        />
        
        <CardAtractivo 
            img={lasPiedritas}
            titulo={"Posta Las Piedrita"} 
            descripcion={`El 6 de agosto de 1810 fue capturado en ésta Posta el ex Virrey Santiago de Liniers, héroe de la reconquista de Buenos Aires y luego conspirador y organizador de la contrarrevolución de Mayo. La operación fue comandada por Antonio Balcarce.
            <br/>
            El ex Virrey recorría éstos caminos para llegar al Alto Perú en busca de partidarios para derrocar la Junta de Mayo. Tres semanas después de ser detenida la partida completa, salvo el Obispo Orellana, fue ejecutada en el Monte de lo Papagallos. `}
            ubicacion={"https://maps.app.goo.gl/eNdP63ZjZfF8kRuw9"}
        />

        <CardAtractivo 
            img={pozodeltigre}
            titulo={"Posta Pozo del Tigre"} 
            descripcion={`La Posta debe su nombre al yaguareté (tigre americano) que poblaba la zona. Pozo del Tigre, es una de las pocas construcciones del lugar que aún queda en pie y que conserva un dintel original donde se puede leer: Año del Señor de 1771.
            <br/>
            En agosto de 1810, el Coronel Antonio Gonzáles Balcarce escribió allí el comunicado oficial dirigido al Coronel Ortiz de Ocampo, informando que el ex Virrey Liniers había sido detenido en la Posta de Las Piedritas. `}
            ubicacion={"https://maps.app.goo.gl/Vz4njy8gxU21uyyu5"}
        />



      </section>
      <section >
        <h3 className='py-3'>GUIAS TURISTICOS</h3>
            <section className='my-3 d-md-flex justify-content-md-evenly'>
                <article data-aos="fade-up" data-aos-duration="3000" className='guias d-flex justify-content-center align-items-center mx-auto my-4 mx-md-0'>
                    <img className="mx-2 my-4" src={laura} alt="" />
                    <div className='text-center mx-3'>
                        <h4 className='mb-4'>Laura Gomez</h4>
                        <a className="py-2 px-4" href="tel:+5493522410156">Contactar</a>
                    </div>
                </article>

            </section>
      </section>
    </main>
  )
}

export default Atractvos