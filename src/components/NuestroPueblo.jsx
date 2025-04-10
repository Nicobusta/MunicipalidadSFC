import React, { useEffect, useState, useRef } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./nuestroPueblo.scss";
import Hospedaje from "./Hospedaje.jsx";
import Gastronomia from "./Gastronomia.jsx";
import banner from "../assets/bannerNuestroPueblo.jpg";
import galeria1 from "../assets/galeria/galeria1.webp";
import galeria2 from "../assets/galeria/galeria2.webp";
import galeria3 from "../assets/galeria/galeria3.webp";
import galeria4 from "../assets/galeria/galeria4.webp";
import galeria5 from "../assets/galeria/galeria5.webp";
import galeria6 from "../assets/galeria/galeria6.webp";
import galeria7 from "../assets/galeria/galeria7.webp";
import galeria8 from "../assets/galeria/galeria8.webp";
import galeria9 from "../assets/galeria/galeria9.webp";
import galeria_1 from "../assets/galeria/galeria_1.webp";
import galeria_2 from "../assets/galeria/galeria_2.webp";
import galeria_3 from "../assets/galeria/galeria_3.webp";
/* ALOJAMIENTOS */
import lasPencas from "../assets/alojamientos/lasPencas.jpeg";
import piedraMora from "../assets/alojamientos/piedraMora.jpg";
import sanFrancisco from "../assets/alojamientos/sanFrancisco.jpg";
import garribia from "../assets/alojamientos/garribia.png";
import damian from "../assets/alojamientos/damian.jpeg";
import miguelHeredia from "../assets/alojamientos/miguelHeredia.jpeg";
import jacaranda from "../assets/alojamientos/jacaranda.jpeg";
import susi from "../assets/alojamientos/susi.jpeg";
/* GASTRONOMIA */
import bar from "../assets/gastronomia/bar.png";
import nuevoRancho from "../assets/gastronomia/nuevoRancho.png";
import encuentros from "../assets/gastronomia/encuentros.jpg";
import elcruce from "../assets/gastronomia/elcruce.jpg";
import nacha from "../assets/gastronomia/nacha.png";
import laprevia from "../assets/gastronomia/laprevia.jpeg";
import barDamian from "../assets/gastronomia/damian.jpeg";


const NuestroPueblo = () => {
  const carouselRef = useRef(null);
  const galleryImagesRef = useRef([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => { 
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
  
    window.addEventListener("resize", handleResize);
  
    Aos.init();
    const carousel = new window.bootstrap.Carousel(carouselRef.current);
  
    const handlers = []; // Almacena las referencias de los event listeners
  
    galleryImagesRef.current.forEach((img, index) => {
      if (img) {
        const handleImageClick = () => carousel.to(index);
        img.addEventListener("click", handleImageClick);
        handlers.push({ img, handleImageClick });
      }
    });
  
    return () => {
      window.removeEventListener("resize", handleResize);
      handlers.forEach(({ img, handleImageClick }) => {
        if (img) {
          img.removeEventListener("click", handleImageClick);
        }
      });
    };
  }, []);

  
  return (
    <main className="overflow-hidden">
      <section className="banersNP">
        <img
          className=""
          src={banner}
          alt="Iglesia San Francisco Solano"
          width="120%"
          height="auto"
        />
        <div></div>
        <h1 className="w-100 text-center">Nuestro Pueblo</h1>
      </section>
      <p data-aos="zoom-in" className="text-center mx-4 my-4 mx-md-auto my-md-5">
        San Francisco del Chañar es una localidad situada al norte de la
        provincia de Córdoba, a 200 km de la ciudad capital. A ella se llega a
        través de ruta 9, y luego tomando la ruta 22 por 30 km más. Dicha
        localidad está situada sobre el camino real y cuenta con una población
        de aprox. 4500 personas.
      </p>

      {/* COMIENZO DE LA GALERIA */}
      <section>
        <h3 data-aos="zoom-in" className="py-3">POSTALES</h3>
        <article className="galeria d-flex flex-wrap px-3 mx-md-auto">
          <img
            data-aos="zoom-out"
            src={galeria1}
            alt=""
            className="w-100 my-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[0] = el)}
          />
          <div className="w-50 d-flex flex-column pe-3">
            <img
              data-aos="zoom-out-right"
              src={galeria2}
              alt=""
              className="mb-3 rounded-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              ref={(el) => (galleryImagesRef.current[1] = el)}
            />

            <img
              data-aos="zoom-out-right"
              src={galeria3}
              alt=""
              className="mb-3 rounded-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              ref={(el) => (galleryImagesRef.current[2] = el)}
            />
          </div>
          <img
            data-aos="zoom-out-left"
            src={galeria4}
            alt=""
            className="w-50 mb-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[3] = el)}
          />
          <img
          data-aos="zoom-out-right"
            src={galeria6}
            alt=""
            className="w-50 mb-3 pe-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[4] = el)}
          />
          <div className="w-50 d-flex flex-column">
            <img
            data-aos="zoom-out-left"
              src={galeria8}
              alt=""
              className="mb-3 rounded-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              ref={(el) => (galleryImagesRef.current[5] = el)}
            />

            <img
            data-aos="zoom-out-left"
              src={galeria_1}
              alt=""
              className="mb-3 rounded-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              ref={(el) => (galleryImagesRef.current[6] = el)}
            />
          </div>
          <img
            data-aos="zoom-out-right"
            src={galeria_3}
            alt=""
            className="w-50 mb-3 pe-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[7] = el)}
          />
          <img
            data-aos="zoom-out-left"
            src={galeria7}
            alt=""
            className="w-50 mb-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[8] = el)}
          />
          <img
          data-aos="zoom-out"
            src={galeria9}
            alt=""
            className="w-100 mb-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[9] = el)}
          />
          <img
          data-aos="zoom-out-right"
            src={galeria5}
            alt=""
            className="w-50 mb-3 pe-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[10] = el)}
          />
          <img
          data-aos="zoom-out-left"
            src={galeria_2}
            alt=""
            className="w-50 mb-3 rounded-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ref={(el) => (galleryImagesRef.current[11] = el)}
          />
        </article>
        <div
          className=" modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button> */}

              <div ref={carouselRef} id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={galeria1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria4} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria6} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria8} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria_1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria_3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria7} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria9} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria5} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={galeria_2} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* COMIENZO DE ALOJAMIENTOS */}
      <section>
          <h3 className="py-3">ALOJAMIENTOS</h3>
          <article className="w-100 d-md-flex flex-wrap justify-content-md-center px-sm-5 px-md-0">
              <Hospedaje 
                efecto={"fade-right"}
                titulo="LAS PENCAS"
                tipo="DEPARTAMETO"
                capacidad="12"
                direccion="Belgrano 515" 
                tel="+5493516355967"
                img={lasPencas}
              />

              <Hospedaje
                efecto={"fade-left"}
                titulo="PIEDRA MORA"
                tipo="HOSPEDAJE"
                capacidad="18"
                direccion="Juan Pablo II y Sobremonte" 
                tel="+5493522455430"
                img={piedraMora}
              />

              <Hospedaje 
                efecto={"fade-right"}
                titulo="ROSARIO GARRIBIA"
                tipo="HOSPEDAJE"
                capacidad="6"
                direccion="San Martin 585" 
                tel="+5493517520560"
                img={garribia}
              />

              <Hospedaje
                efecto={"fade-left"}
                titulo="SAN FRANCISCO"
                tipo="DEPARTAMETO"
                capacidad="6"
                direccion="Gra. Paz 366" 
                tel="+5493516249250"
                img={sanFrancisco}
              />
          
              <Hospedaje 
                efecto={"fade-right"}
                titulo="HOTEL DAMIAN"
                tipo="DEPARTAMETO"
                capacidad="14"
                direccion="San Martin 287" 
                tel="+5493522648201"
                img={damian}
              />

              <Hospedaje
                efecto={"fade-left"}
                titulo="MIGUEL HEREDIA"
                tipo="DEPARTAMETO"
                capacidad="5"
                direccion="Calle Alberdi" 
                tel="+5493516249250"
                img={miguelHeredia}
              />
            
              <Hospedaje 
                efecto={"fade-right"}
                titulo="SUSI BULACIOS"
                tipo="DEPARTAMETO"
                capacidad="4"
                direccion="Eva Duarte 252" 
                tel="+5493522455147"
                img={susi}
              />

              <Hospedaje
                efecto={"fade-left"}
                titulo="JACARANDA"
                tipo="DEPARTAMETO"
                capacidad="6"
                direccion="Avellaneda 107 esq. San Martin" 
                tel="+5493522543383"
                img={jacaranda}
              />
            
          </article>
          
      </section>

{/* COMIENZO DE GASTRONOMIA */}
      {isLargeScreen ? (
        <section>
            <h3 className="py-3">GASTRONOMIA</h3>
            <div data-aos="fade-up" className="d-flex justify-content-evenly">

              <Gastronomia 
                nombre="Nuevo Rancho" 
                telefono="+5493516144200" 
                img={nuevoRancho}
              />

              <Gastronomia 
                nombre="La previa" 
                telefono="+5493513732290" 
                img={laprevia}
              />
              
              <Gastronomia 
                nombre="bar encuentos" 
                telefono="+5493522650648" 
                img={encuentros}
              />   

              <Gastronomia 
                nombre="bar el cruce" 
                telefono="+5493516528371" 
                img={elcruce}
              /> 
                
              <Gastronomia 
                nombre="nacha food truck" 
                telefono="+5493522456756" 
                img={nacha}
              /> 
              
              <Gastronomia 
                nombre="bar la terminal" 
                telefono="+5493512109971" 
                img={bar}
              />

              <Gastronomia 
                nombre="BAR DAMINA" 
                telefono="+5493522648201" 
                img={barDamian}
              />   
                            
            </div>
        </section>
      ) : (
        <section>
            <h3 className="py-3">GASTRONOMIA</h3>
            <div id="carouselExampleIndicators" data-aos="fade-up" className="carousel slide">
  
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                 
                  <Gastronomia 
                    nombre="Nuevo Rancho" 
                    telefono="+5493516144200" 
                    img={nuevoRancho}
                  />

                  <Gastronomia 
                    nombre="La previa" 
                    telefono="+5493513732290" 
                    img={laprevia}
                  />
                  
                  <Gastronomia 
                    nombre="bar encuentos" 
                    telefono="+5493522650648" 
                    img={encuentros}
                  />   

                  <Gastronomia 
                    nombre="bar el cruce" 
                    telefono="+5493516528371" 
                    img={elcruce}
                  /> 
                </div>
              </div>

              <div className="carousel-item">
                <div className=" d-flex justify-content-center">
                  <Gastronomia 
                    nombre="nacha food truck" 
                    telefono="+5493522456756" 
                    img={nacha}
                  /> 
                  
                  <Gastronomia 
                    nombre="bar la terminal" 
                    telefono="+5493512109971" 
                    img={bar}
                  />

                  <Gastronomia 
                    nombre="BAR DAMINA" 
                    telefono="+5493522648201" 
                    img={barDamian}
                  /> 
                </div>
              </div>
              
            </div>
            <button className="carousel-control-prev justify-content-start" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next justify-content-end" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>            
        </section>
      )}        
      
    </main>
  );
};

export default NuestroPueblo;
