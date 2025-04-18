import React from 'react'
import './consejo.scss'
import MenuGobierno from './Menugobierno'
import avatarMujer from '/avatarMujer.webp'
import avatarHombre from '/avatarHombre.webp'

const Tribunal = () => {
  return (
    <>
      <div className="bg-body py-4">
      <MenuGobierno/>
    </div>
      <section id="tribunal" className='mx-auto'>
          <article className='intro mx-auto'>
              <h2>Honorable Tribunal de Cuentas</h2>
              <p className='py-3 fs-5'>Somos un órgano de fiscalización externo que vela por el uso adecuado de los recursos públicos. Fiscalizamos que cada pago se realice conforme a lo establecido por la Ley Orgánica Municipal y las ordenanzas dictadas por el Concejo Deliberante. Nuestra función principal es controlar el proceso de legalidad del gasto público municipal.</p>
          </article>
          <article  className='intro mx-auto'>
              <h3 className='w-100 py-4'>Te presentamos a las personas que lo integran</h3>

              <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                  <img src={avatarMujer} roundedCircle />
                  <div className='ms-5'>
                    <h4>María del Carmen Córdoba</h4>
                  </div>
              </div>

              <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                  <img src={avatarHombre} roundedCircle />
                  <div className='ms-5'>
                    <h4>Juan Miguel Montenegro</h4>
                  </div>
              </div>

              <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                  <img src={avatarHombre} roundedCircle />
                  <div className='ms-5'>
                    <h4>Miguel Alfredo Montes</h4>
                  </div>
              </div>
          </article>
      </section>
    </>
  )
}

export default Tribunal