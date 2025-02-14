import React from 'react'
import './home.scss'
import prePalma from '../assets/noticias/prePalma.jpeg'
import entrega from '../assets/noticias/entregaBandera.jpeg'
import festival from '../assets/noticias/festival.webp'
import Calendar from './Calendar'

const Home = () => {
  return (
    <main>
        <section className='banner__inicio'>
          <div className="img__principal" >
          </div>
          <h1>¡Descubri San Francisco del Chañar!</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
          </svg>
        </section>
        <section className='eventos'>
          <h4 className='py-2'>Eventos</h4>
          <Calendar/>
        </section>
        <section className='noticias'>
          <h4 className='py-2'>Noticias</h4>
          <section className='d-flex flex-wrap justify-content-center align-items-center'>
{/**************** PrePalma ****************/}
             <article className='intro mx-auto'>
              <button className='text-center' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={prePalma} width="100%" alt="" />
                <h5>Llega el Certamen de Música Folclórica Pre Palma</h5>
                <p>Seguir leyendo 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </p>
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title  text-center fs-4" id="exampleModalLabel">Llega el Certamen de Música Folclórica Pre Palma</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                      <img src={prePalma} width="100%" alt="" />
                      <p className='fs-6 text-start mt-3 mx-auto'> 🎶 Con profundo orgullo deseamos invitarte a nuestro primer Certamen de Música Folclórica Pre Palma 2024 🎶 <br></br>

                      ¡Queremos escucharlos! 🌟 Estamos buscando a los mejores talentos de música folclórica del Norte cordobés para participar en nuestro primer Certamen de Música Folclórica Pre Palma 2024, que se llevará a cabo los días 20 y 21 de diciembre en nuestro querido pueblo, San Francisco del Chañar.<br></br>
                      <br></br>
                      💡 ¿Qué buscamos?<br></br>
                      🎤 Artistas de música folclórica de toda la provincia.<br></br>
                      🎼 Originalidad y autenticidad en su estilo y repertorio.<br></br>
                      ✨ Capacidad para conectar con el público y transmitir la esencia de nuestra cultura.<br></br>

                      <br></br>
                      📋 ¿Cómo participar?<br></br>
                      📌 Lee atentamente las bases y condiciones adjuntas en nuestra destacada “Pre Palma” o conocelas aca <a href="https://drive.google.com/file/d/1agBaIBXRSnTmzluq1XOqaH_IUT2HX96o/view?fbclid=PAZXh0bgNhZW0CMTEAAab3wfdEsz40dMPiz8u8VzQ6EO9OGMNU0hMzFSDPtc7Aim2LyMvaIO2CBOc_aem_JRZU-E8vPWhTzGlQ-RmcKQ" target="_blank">Bases y condiciones Pre Palma</a>.<br></br>
                      📌 Completa el formulario nuestra destacada “Pre Palma” o en el siguiente link <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJ_FaxNrV6h8rajwqyPhthlhZsBnI2okr1cbUgjcpDMj2jeQ/viewform" target="_blank">Completar formulario</a>.<br></br>
                      <br></br>

                      🏆 ¿Qué ganarás?<br></br>
                      🎵 La oportunidad de compartir tu música en horario pico en nuestro emblemático Festival de la Palma, que en 2025 cumplirá 41 años de trayectoria.<br></br>
                      🌟 Ser seleccionado por un prestigioso y reconocido jurado.<br></br>
                      📣 Reconocimiento y visibilidad tanto en el escenario como en diversos medios virtuales y televisivos.<br></br>
                      🎶 La posibilidad de ser convocado para futuros eventos y proyectos.<br></br>
                      <br></br>
                      Más info en  📲 <a href="tel:+5493513945187" target="_blank">3513945187</a> | <a href="tel:+5493512100747" target="_blank">3512100747</a> o escribinos a <a href="mailto:culturasanfranciscodelchanar@gmail.com" target="_blank">culturasanfranciscodelchanar@gmail.com</a>. </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
{/**************** Entrega de bandera ****************/}
          <article className='intro mx-auto'>
            <button type="button" data-bs-toggle="modal" data-bs-target="#entregaBanderas">
              <img width="100%" src={entrega} alt="" srcset="" />
              <h5>Se realizó la entrega de las banderas de flameo</h5>
              <p>Seguir leyendo 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </p>
            </button>

              <div class="modal fade" id="entregaBanderas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-4 text-center" id="exampleModalLabel">Se realizo la entrega de las banderas de flameo</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <img width="100%" src={entrega} alt="" srcset="" />
                      <p className='fs-6 text-start mt-3 mx-auto'>¡Hoy marcamos un hito en la historia de San Francisco del Chañar! 🎉
                      <br /><br />
                      Por primera vez, entregamos las banderas de flameo a las instituciones de nuestra localidad. Esta bandera, presentada ante la sociedad el 14 de agosto del corriente, simboliza nuestra identidad y orgullo. 🇦🇷💙
                      <br /><br />
                      A partir de hoy, cada 12 de noviembre se conmemorará el Día de la Bandera de San Francisco del Chañar. 🇦🇷💙
                      <br /><br />
                      Un paso más hacia la consolidación de nuestra identidad y tradiciones. ¡Gracias a todos los que hacen posible este sueño</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/**************** festival ****************/}
          <article className='intro mx-auto'>
            <button type="button" data-bs-toggle="modal" data-bs-target="#festival">
              <img width="100%" src={festival} alt="" srcset="" />
              <h5>El Festival Provincial de la Palma se luce con una nueva edición </h5>
              <p>Seguir leyendo 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
              </p>
            </button>

              <div class="modal fade" id="festival" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-4 text-center" id="exampleModalLabel">El Festival Provincial de la Palma se luce con una nueva edición</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <img width="100%" src={festival} alt="" srcset="" />
                      <p className='fs-6 text-start mt-3 mx-auto'>Se avecina la 41ª edición del Festival Provincial de la Palma en San Francisco del Chañar, los días 14 y 15 de febrero. Este evento se llevará a cabo en la plaza central San Martín, frente a la imponente Catedral del Norte, un icono que identifica y diferencia a este festival.
                      <br /><br />
                      Las dos veladas contarán con la participación de importantes artistas como Christian Herrera, Indio Lucio Rojas, Ángel Martin, Facu y La Fuerza, La Ranchada, Ganadores del Certamen de Música Folclórica Argentina Pre Palma 2025, entre otros. Pero no solo habrá música, también se podrá disfrutar de una variedad de actividades y sectores, como:
                      <br /><br />
                      - Carpa de artesanos: donde se podrán encontrar productos locales y artesanías.<br/>
                      - Sector de juegos infantiles: para que los más pequeños puedan divertirse.<br/>
                      - Carpa de comunas y municipios: donde se podrán conocer las diferentes comunas y municipios de la región.<br/>
                      - Carpa de exposición de obras de artistas plásticos: para admirar las obras de arte de la región.<br/>
                      - Sector de patio de comidas: con platos típicos y tradicionales para degustar.<br/>
                      - Sector de puestos de ventas de productos: para comprar productos variados, locales y regionales.
                      <br /><br />
                      El evento comenzará a las 21:30 horas y se extenderá hasta las 7 de la mañana, por lo que habrá mucho tiempo para disfrutar de todas las actividades y sectores.
                      <br /><br />
                      El señor Intendente Sebastian Argañaraz se enorgullece de poder llevar a cabo de manera conjunta con toda la comunidad una nueva edición de esta tradicional e icónica festividad del norte cordobés.
                      <br /><br />
                      ¡No te pierdas esta oportunidad de vivir una experiencia inolvidable en el Festival Provincial de la Palma!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            </section>
        </section>
    </main>
  )
}

export default Home