import React from 'react'
import './consejo.scss'
import avatarMujer from '/avatarMujer.webp'
import avatarHombre from '/avatarHombre.webp'

import MenuGobierno from './Menugobierno';

const Consejo = () => {
  return (
    <>
    <MenuGobierno/>
    <section id="consejo" className='mx-auto pt-5'>
        <article className='intro mx-auto'>
            <h2>Honorable Tribunal de Cuentas</h2>
            <p className='pt-3 fs-5'>En la estructura de división de poderes, somos el órgano Legislativo Municipal.
            </p>
            <p className='pb-3 fs-5'>
            En nuestro seno representamos a las fuerzas políticas que la ciudadanía votó. Escuchamos y atendemos las necesidades de los vecinos y las abordamos a través de la creación de proyectos y ordenanzas que buscan hacer crecer la ciudad en la que vivimos.
            </p>
        </article>
        <article  className='intro mx-auto'>
            <h3 className='text-center py-4'>Te presentamos las personas que representan a las vecinas y los vecinos de san fco. del chañar</h3>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarMujer} roundedCircle />
                <div className='ms-5'>
                  <h4>Lorena Analía Farías</h4>
                </div>
            </div>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarMujer} roundedCircle />
                <div className='ms-5'>
                  <h4>Dayana Berenice Navarro</h4>
                </div>
            </div>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarHombre} roundedCircle />
                <div className='ms-5'>
                  <h4>Darío Daniel Gómez</h4>
                </div>
            </div>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarHombre} roundedCircle />
                <div className='ms-5'>
                  <h4>José Luis Chávez</h4>
                </div>
            </div>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarMujer} roundedCircle />
                <div className='ms-5'>
                  <h4>Ramona Mariela Torres</h4>
                </div>
            </div>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarMujer} roundedCircle />
                <div className='ms-5'>
                  <h4>Miryam del Valle Rojas</h4>
                </div>
            </div>

            <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                <img src={avatarHombre} roundedCircle />
                <div className='ms-5'>
                  <h4>Guillermo Damián Barbini</h4>
                </div>
            </div>


        </article>
    </section>
    </>
  )
}

export default Consejo