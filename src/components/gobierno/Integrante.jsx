import React from 'react'

const Integrante = ({img, nombre}) => {
  return (
    <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
        <img src={img} roundedCircle />
        <div className='ms-5'>
            <h4>{nombre}</h4>
        </div>
    </div>
  )
}

export default Integrante