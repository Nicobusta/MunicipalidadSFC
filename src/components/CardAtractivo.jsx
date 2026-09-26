import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const CardAtractivo = ({img, titulo, descripcion,ubicacion}) => {
  return (
    <article data-aos="fade-right" className='card__atractivo text-center mx-auto pb-3'>
          <img src={img} alt={`foto de ${titulo}`}/>
          <h4 className='py-3'>{titulo}</h4>
          <p className='mx-auto pt-4 pb-2' dangerouslySetInnerHTML={{ __html: descripcion }} />
          {ubicacion && (
            <a href={ubicacion} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi    bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              Ver en Google Maps
            </a>
          )}
    </article>
  )
}

export default CardAtractivo