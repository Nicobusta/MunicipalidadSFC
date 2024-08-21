import React from 'react'
import MenuGobierno from './Menugobierno'
import seba from '/sebastian.jpeg'

const Intendencia = () => {
  return (
    <div className='d-flex flex-column align-items-center my-4'>
      <MenuGobierno/>
      <h4 className='text-center py-4'>INTENDENTE SEBASTIAN ARGAÑARAZ </h4>
      <img src={seba} alt="Intendente Sebastian Argañaraz" width="80%" height="auto" className='mb-3'/>
      <div className='w-75'>
        <p>Su intendente Sebastián Argañaraz, es un joven  parte de una nueva generación de dirigente que desde hace un tiempo han tomado protagonismo en el escenario político en el norte cordobés, y se encuentra cumpliendo sus funciones desde diciembre del 2023.</p>
        <p>Oriundo de  la zona rural  comenzó  su educación primaria en la escuela de campo  San Francisco Viejo para terminar la  secundaria en el IPEM 63 “Republica de Italia” (hoy IPETyM 63),  institución de reconocido  prestigio y trayectoria en la región.</p>
        <p>Panadero y comerciante del pueblo su vida ha transitado por varios oficios como trabajador rural y camionero, antes de involucrarse en la vida política, habiendo pasado previamente por la gestión deportiva siendo uno de los fundadores y luego  presidente del club La Franciscana, conocida institución del pueblo donde comenzó a dar sus primeros pasos en acciones sociales, vinculándose y comprometiéndose  a través  del deporte.</p>
        <p>Hoy San Francisco del Chañar bajo su conducción, renovación generacional  y acompañamiento de un  gran grupo de trabajo municipal, viene mostrando señales de una nueva visión y forma de hacer política que han logrado conseguir grandes transformaciones en infraestructura, cultura,  deporte,  salud y participación ciudadana.
        </p>
      </div>

    </div>
  )
}

export default Intendencia