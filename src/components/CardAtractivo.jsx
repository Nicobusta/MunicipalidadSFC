import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const CardAtractivo = ({img, titulo, descripcion}) => {
  return (
    <article data-aos="fade-right" className='card__atractivo text-center mx-auto pb-3'>
          <img src={img} alt={`foto de ${titulo}`}/>
          <h4 className='py-3'>{titulo}</h4>
          <p className='mx-auto pt-4' dangerouslySetInnerHTML={{ __html: descripcion }} />
    </article>
  )
}

export default CardAtractivo