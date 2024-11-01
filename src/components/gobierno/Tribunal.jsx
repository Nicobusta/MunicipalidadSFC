import React from 'react'
import './consejo.scss'
import MenuGobierno from './Menugobierno'

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
          <article>
              <h3 className='w-100 py-4'>TE PRESENTAMOS A LAS PERSONAS QUE LO INTEGRAN</h3>

              <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                  <img src="/avatarMujer.webp" roundedCircle />
                  <div className='ms-5'>
                    <h4>María del Carmen Córdoba</h4>
                    <p>Descripcion</p>
                  </div>
              </div>

              <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                  <img src="/avatarHombre.webp" roundedCircle />
                  <div className='ms-5'>
                    <h4>Juan Miguel Montenegro</h4>
                    <p>Descripcion</p>
                  </div>
              </div>

              <div className='card__integrantes w-75 mx-auto mt-4 pb-4 d-flex justify-content-start align-items-center'>
                  <img src="/avatarHombre.webp" roundedCircle />
                  <div className='ms-5'>
                    <h4>Miguel Alfredo Montes</h4>
                    <p>Descripcion</p>
                  </div>
              </div>
          </article>
      </section>
    </>
  )
}

export default Tribunal