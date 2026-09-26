import React from "react";
import "./home.scss";
import liniers from "../assets/personajesHistoricos/Liniers.jpg";
import ramirez from "../assets/personajesHistoricos/Ramirez.jpg";
import belgrano from "../assets/personajesHistoricos/Belgrano.jpg";
import elche from "../assets/personajesHistoricos/Guevara.jpg";
import carcano from "../assets/personajesHistoricos/Carcano.jpg";
import ozobuco from "/ozobuco.jpeg";
import parque from "/parque.jpeg";
import camping from "/camping.webp";
import casaCultural from "/casaCultural.png";


const Home = () => {
  return (
    <main>
      <section className="banner__inicio">
        <div className="img__principal"></div>
        <h1>¡Descubri San Francisco del Chañar!</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
          />
        </svg>
      </section>
      <section className="eventos">
        <h4 className="py-2">Personajes Históricos</h4>
        <div className="d-md-flex justify-content-md-between flex-wrap">
            {/* Liniers */}
            {/* <article className="ventana text-center mx-auto">
                <button
                  className="text-center"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Liniers"
                >
                  <img src={liniers} width="100%" alt="" />
                  <p>
                    Conocer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </p>
                </button>

                <div
                  class="modal fade"
                  id="Liniers"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      
                      <div class="modal-body ">
                        <button
                          type="button"
                          class="btn-close position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <img src={liniers} width="100%" alt="" />
                        <p className="fs-6 text-start mt-3 mx-auto">
                          Texto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article> */}
           
            {/* belgrano */}
              <article className="ventana text-center mx-auto">
                <button
                  className="text-left container"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Belgrano"
                >
                  <p>
                    Conocer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </p>
                  <img src={belgrano} width="100%" alt="" />
                </button>

                <div
                  class="modal fade"
                  id="Belgrano"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      
                      <div class="modal-body ">
                        <button
                          type="button"
                          class="btn-close position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <img src={belgrano} width="100%" alt="" />
                        <p className="fs-6 text-start mt-3 mx-auto">
                          El antiguo Camino Real al Alto Perú fue una de las principales vías de comunicación del territorio durante los siglos coloniales.<br></br>
                          Por este camino circulaban viajeros, comerciantes, funcionarios, correspondencia, tropas y noticias provenientes de distintos puntos del Virreinato.<br></br>
                          Su trazado unía Buenos Aires con el territorio del actual Estado Plurinacional de Bolivia.
                          En el norte cordobés, el camino atravesaba numerosos parajes y establecimientos destinados a asistir a quienes realizaban estas extensas travesías. Entre ellos se encontraban la Posta del Chañar, la Posta Pozo del Tigre y la Posta Las Piedritas. Estas postas ofrecían descanso, alimentos, provisiones y caballos frescos para continuar el viaje. También funcionaban como puntos estratégicos para el traslado de correspondencia y la transmisión de información.<br></br>
                          Durante las luchas por la Independencia, el Camino Real adquirió una importancia política y militar fundamental. Por este corredor avanzaron soldados, autoridades y los ejércitos que defendieron la causa revolucionaria.<br></br>
                          Manuel Belgrano recorrió el territorio cordobés en sus desplazamientos como jefe del Ejército del Norte. Su paso por esta región estuvo relacionado con las campañas que buscaron asegurar la libertad de las Provincias Unidas.<br></br>
                          El norte de Córdoba constituía un enlace indispensable entre el centro del territorio y las provincias del norte. Por ello, Belgrano y sus tropas debieron transitar estos caminos en condiciones muchas veces difíciles.<br></br>
                          La memoria histórica local conserva el relato de su paso por las antiguas postas de San Francisco del Chañar. En particular, la tradición recuerda su presencia en la Posta del Chañar durante uno de sus viajes. Pozo del Tigre, que funcionaba como posta y sistema de correos desde 1769, también integraba este recorrido histórico. Las Piedritas completaba este tramo y fue escenario del movimiento de viajeros, mensajeros, tropas y figuras destacadas de nuestra historia.<br></br>
                          Aunque no todos los detalles de las detenciones de Belgrano quedaron registrados documentalmente, su tránsito por el Camino Real se encuentra reconocido.
                          Estas postas permiten comprender cómo se organizaban los viajes y las comunicaciones en tiempos de la Independencia. Cada una fue testigo silencioso de acontecimientos que contribuyeron a la construcción de la Nación Argentina. Sus caminos de tierra todavía evocan el paso de carretas, caballos, correos y soldados.<br></br>
                          Actualmente, las tres postas están reconocidas como lugares históricos pertenecientes al antiguo Camino Real al Alto Perú. Su conservación permite recuperar la memoria de Manuel Belgrano y de quienes recorrieron estas tierras durante el proceso independentista. Visitar este tramo es acercarse a una historia que permanece viva en el paisaje y en la identidad de su comunidad.<br></br>
                          Seguir los Caminos de Belgrano es volver a transitar las huellas de libertad que atraviesan San Francisco del Chañar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

            {/* Ramirez */}
            {/* <article className="ventana mx-auto">
                <button
                  className="text-center"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Ramirez"
                >
                  <img src={ramirez} width="100%" alt="" />
                  <p>
                    Conocer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </p>
                </button>

                <div
                  class="modal fade"
                  id="Ramirez"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      
                      <div class="modal-body ">
                        <button
                          type="button"
                          class="btn-close position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <img src={ramirez} width="100%" alt="" />
                        <p className="fs-6 text-start mt-3 mx-auto">
                          Texto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article> */}

              {/* El che */}
            
            
            {/* El che guevara */}
            <article className="ventana text-center mx-auto">
                <button
                  className="text-center"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Gevara"
                >
                  <p>
                    Conocer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </p>
                  <img src={elche} width="100%" alt="" />
                </button>

                <div
                  class="modal fade"
                  id="Gevara"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      
                      <div class="modal-body ">
                        <button
                          type="button"
                          class="btn-close position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <img src={elche} width="100%" alt="" />
                        <p className="fs-6 text-start mt-3 mx-auto">
                          Antes de convertirse en una de las figuras más conocidas de la historia latinoamericana, Ernesto “Che” Guevara fue un joven estudiante de Medicina con una profunda curiosidad por conocer el territorio y sus realidades sociales.<br></br>
                          En el año 1950, durante uno de sus primeros grandes viajes por la Argentina, Guevara llegó a San Francisco del Chañar. Su destino fue el entonces Sanatorio José J. Puente, una institución dedicada al tratamiento de personas que padecían la enfermedad de Hansen, conocida antiguamente como lepra.<br></br>
                          Allí se encontraba trabajando su amigo Alberto Granado, bioquímico cordobés con quien años más tarde realizaría el célebre viaje por América Latina que inspiró los llamados “Diarios de motocicleta”.<br></br>
                          La visita a San Francisco del Chañar ocurrió, por lo tanto, antes de aquel famoso recorrido continental y formó parte de una etapa temprana de su vida, cuando Guevara comenzaba a interesarse especialmente por la medicina, las enfermedades sociales y las condiciones de vida de las comunidades que encontraba en el camino.<br></br>
                          Durante su estadía tuvo contacto con el funcionamiento del sanatorio, con sus trabajadores y con los pacientes que allí recibían atención.<br></br>
                          Este paso por el norte cordobés representa un episodio poco conocido, pero muy significativo dentro de sus primeros viajes.<br></br>
                          San Francisco del Chañar quedó así ligado a una etapa formativa de su historia personal, cuando todavía era simplemente Ernesto Guevara, un joven viajero que recorría la Argentina intentando conocerla de cerca.<br></br>
                          El antiguo Sanatorio J. J. Puente conserva, de este modo, una memoria que trasciende lo local y conecta a nuestro pueblo con un capítulo de la historia latinoamericana.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              
              {/* Carcano */}
            <article className="ventana text-center mx-auto">
                <button
                  className="text-center"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#Carcano"
                >
                  <p>
                    Conocer más
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </p>
                  <img src={carcano} width="100%" alt="" />
                </button>

                <div
                  class="modal fade"
                  id="Carcano"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      
                      <div class="modal-body ">
                        <button
                          type="button"
                          class="btn-close position-absolute top-0 end-0 m-3"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <img src={carcano} width="100%" alt="" />
                        <p className="fs-6 text-start mt-3 mx-auto">
                          Ramón J. Cárcano, una de las figuras más destacadas de la historia política e intelectual de Córdoba, pasó parte de su infancia en San Francisco del Chañar.<br></br>
                          Su llegada al pueblo se produjo hacia 1867, cuando su familia se alejó de la ciudad de Córdoba a causa de la epidemia de cólera.<br></br>
                          Por aquellos años, Chañar era una pequeña población del norte cordobés, atravesada por el antiguo Camino Real y ligada a una vida profundamente rural. Cárcano era entonces apenas un niño, pero los recuerdos de aquella etapa lo acompañaron durante toda su vida.<br></br>
                          Décadas más tarde, evocó esos años en su obra autobiográfica Mis primeros ochenta años. En sus memorias describe escenas cotidianas que permiten imaginar cómo era la vida en el pueblo durante la segunda mitad del siglo XIX.
                          Uno de los recuerdos más llamativos está relacionado con la Guerra del Paraguay, que por entonces ocupaba un lugar central en las noticias del país. Aquellos acontecimientos también llegaban hasta San Francisco del Chañar y despertaban la imaginación de los niños.<br></br>
                          Cárcano cuenta que jugaban a representar las batallas, dividiéndose entre “argentinos” y “paraguayos”. Utilizaban piedras, hondas, boleadoras y sables de madera para recrear aquellos enfrentamientos. En una de esas jornadas, el propio Cárcano recibió una fuerte pedrada en la cabeza y quedó inconsciente. La herida le dejó una cicatriz que, según recordaría más tarde, lo acompañó durante toda su vida.<br></br>
                          Más allá de la anécdota, su relato posee hoy un enorme valor histórico.<br></br>
                          Sus recuerdos permiten acercarnos a la vida cotidiana, los juegos y las costumbres de los niños que habitaban Chañar hace más de 150 años. También muestran cómo los grandes acontecimientos nacionales podían sentirse incluso en pequeñas comunidades del interior. La presencia de Cárcano forma parte de esa historia silenciosa que permanece ligada a las antiguas calles y casonas del pueblo.<br></br>
                          Muchas de las construcciones de adobe que hoy forman parte de este recorrido pertenecen al mismo paisaje histórico que él conoció durante su niñez. Caminar por ellas permite imaginar aquel San Francisco del Chañar que quedó grabado en sus recuerdos.<br></br>
                          Su testimonio convierte al pueblo no solo en escenario de su infancia, sino también en parte de la memoria escrita de Córdoba. Hoy, a través de Huellas del Adobe, esa historia vuelve a cobrar vida y puede ser compartida con quienes recorren nuestro patrimonio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              </div>
      </section>

      <section className="eventos ">
        <h4 className="py-2">Te recomendamos...</h4>
        <div className="d-md-flex justify-content-md-between flex-wrap">
        <article className="recomendado mx-auto">
          <img src={parque} width="100%" alt="" />
          <h5 className="mx-auto text-center">Parque Municipal</h5>
          <p className="fs-6 text-start mt-3 mx-auto">
            Un amplio predio parquizado pensado para la recreación, el descanso y el encuentro. Su estanque, la arboleda y los diferentes espacios verdes crean un entorno agradable para caminar, relajarse o compartir en familia. Cuenta con aparatos para realizar actividad física, asadores, tomas de energía eléctrica e iluminación mediante faroles, ofreciendo comodidad para disfrutar del lugar durante distintos momentos del día.<br></br>
              <br></br>
            Acceso: Libre y gratuito todo el año           
            
          </p>
          <a href="tel:+5493522440078" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
              Número de Contacto (Municipalidad)
            </a>
          <a href="https://maps.app.goo.gl/H6LpznujkaenKAUP9" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi    bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              Ver en Google Maps
            </a>
       </article>

       <article className="recomendado mx-auto">
          <img src={camping} width="100%" alt="" />
          <h5 className="mx-auto text-center">Camping Los Sauces</h5>
          <p className="fs-6 text-start mt-3 mx-auto">
            Un espacio arbolado y tranquilo, ideal para descansar y disfrutar de una jornada en familia o con amigos. El predio cuenta con provisión de agua, asadores y acceso a los sanitarios del complejo de la pileta municipal. Durante la temporada de verano, también es posible disfrutar de la pileta, convirtiéndolo en una excelente opción para refrescarse y compartir momentos al aire libre.
            
              <br></br>
            <br></br>
              Acceso: Libre y gratuito
              <br></br>
            <br></br>
              Temporada de Pileta: Enero y Febrero
              
          </p>

          <a href="tel:+5493522440078" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
              Número de Contacto (Municipalidad)
            </a>

            <a href="https://maps.app.goo.gl/NNrqZxA4hFWUfwdDA" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi    bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              Ver en Google Maps
            </a>
       </article>

       <article className="recomendado mx-auto">
          <img src={casaCultural} width="100%" alt="" />
          <h5 className="mx-auto text-center">Casa Cultural</h5>
          <p className="fs-6 text-start mt-3 mx-auto">
            Un espacio comunitario dedicado al encuentro, la memoria y la expresión artística de San Francisco del Chañar. En sus instalaciones se realizan muestras culturales, históricas y artísticas que permiten conocer la identidad, las tradiciones y el talento local.<br></br>
              <br></br>
            Cuenta con acceso a sanitarios y un sector donde los visitantes pueden calentar agua.<br></br>
            <br></br>
            Horario de atención: lunes a sábado, de 8:00 a 12:00 horas.
          </p>
       </article>
        </div>
      </section>

      <section className="eventos d-flex flex-column justify-content-center">
        <h4 className="py-2">Novedades</h4>
          <img className="mx-auto my-3" src={ozobuco} width="60%" alt="" />
      </section>
    </main>
  );
};

export default Home;
