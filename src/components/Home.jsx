import React from 'react'
import './home.scss'

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
          <article className='card__noticia  mx-auto'>
            <img src="" alt="" srcset="" />
            <p>El día domingo 17 de noviembre se estará realizando la 3ra y última jornada del año Para el Adulto Mayor, no te lo podes perder!!.
            Éste proyecto fue llevado a cabo por la Secretaria de Área Juvenil, acompañada siempre de la mano de nuestro intendente municipal @sebastian.arganaraz.35. Tiene como principal objetivo incluir la participación de los adultos a la comunidad, dialogando entre jóvenes y adultos promoviendo la transmisión de conocimientos y experiencias entre todos, también así intercambiando actividades recreativas.

            ¿Cuando? 17 de noviembre
            Horario: 15:30 hs
            Lugar: Salón CIC

            Actividades que se estarán realizando
            * Escuchar sus anécdotas
            * Adivinanzas, refranes, etc
            * Juegos recreativos y didácticos
            * Diversión
            * Música
            * Bailes
            * Bingo
            * Fotos
            * Compartir una merienda diferente
            * Artistas locales invitados
            * Premios
            Y mucho más
            Esperamos sensibilizar a la sociedad sobre la importancia de cuidar y respetar a los adultos mayores.</p>
          </article>
          <article className='card__noticia mx-auto'>
            <img src="" alt="" srcset="" />
            <p>¿Estás listo para vivir dos noches increíbles? 🎉 SE VIENE el Pre Palma 2024 🌴el 20 y 21 de diciembre en San Francisco del Chañar. 🎶 No te pierdas la oportunidad de ser parte de esta fiesta única. ¡Inscribite ya! 📲 <a href="tel:+5493513945187">3513945187</a> | <a href="tel:+5493512100747">3512100747</a> o escribinos a <a href="mailto:culturasanfranciscodelchanar@gmail.com">culturasanfranciscodelchanar@gmail.com</a>. Pronto, las bases y condiciones. ¡Nos vemos ahí! #PrePalma2024 #sanfranciscodelchañar</p>
          </article>
        </section>
    </main>
  )
}

export default Home