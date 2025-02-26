import React, { useEffect, useState, useRef } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./nuestroPueblo.scss";
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
            {/* las pencas */}
            <div data-aos="fade-right" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>LAS PENCAS</h4>
                {/* <div>
                  
                  <svg
                    className="mx-2"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.153 8.40815C21.2221 8.341 21.2759 8.25966 21.3106 8.16974C21.3453 8.07981 21.3601 7.98344 21.3539 7.88725C21.3478 7.79107 21.3208 7.69736 21.275 7.61258C21.2292 7.5278 21.1655 7.45396 21.0884 7.39615C18.1571 5.26448 14.6244 4.11903 11 4.12502C7.23112 4.12502 3.74412 5.33777 0.911623 7.39615C0.83441 7.45385 0.770623 7.52761 0.724658 7.61233C0.678693 7.69706 0.651642 7.79075 0.645369 7.88694C0.639096 7.98312 0.65375 8.07953 0.688321 8.16951C0.722892 8.25949 0.776559 8.34091 0.845623 8.40815C0.96607 8.52601 1.12428 8.59755 1.29233 8.61012C1.46038 8.6227 1.62747 8.57552 1.76412 8.4769C4.45253 6.53693 7.68473 5.49513 11 5.50002C14.4471 5.50002 17.6371 6.60277 20.2345 8.47552C20.5164 8.67902 20.9082 8.65427 21.153 8.40815Z"
                      fill="black"
                    />
                    <path
                      d="M18.1899 11.3726C18.2607 11.3043 18.3155 11.221 18.3501 11.1288C18.3847 11.0367 18.3984 10.938 18.3901 10.8399C18.3818 10.7418 18.3517 10.6467 18.3021 10.5617C18.2525 10.4767 18.1846 10.4038 18.1033 10.3483C15.9889 8.97527 13.5211 8.24629 11 8.25001C8.38063 8.25001 5.94 9.02001 3.89675 10.3483C3.81501 10.4034 3.74667 10.4762 3.69675 10.5613C3.64684 10.6463 3.61661 10.7415 3.6083 10.8397C3.59999 10.938 3.61381 11.0369 3.64873 11.1291C3.68366 11.2213 3.73881 11.3045 3.81012 11.3726C3.92728 11.487 4.07982 11.5581 4.24272 11.5744C4.40562 11.5906 4.5692 11.551 4.70662 11.462C6.58491 10.259 8.76947 9.62131 11 9.62501C13.2301 9.62157 15.4141 10.2592 17.292 11.462C17.5753 11.6435 17.952 11.6105 18.1899 11.3726ZM15.1882 14.3743C15.499 14.0635 15.4426 13.5424 15.0507 13.343C13.7956 12.7059 12.4076 12.3742 11 12.375C9.5425 12.375 8.16475 12.7243 6.94925 13.343C6.55737 13.5424 6.501 14.0635 6.81175 14.3743L6.83237 14.3949C7.05237 14.6149 7.392 14.6561 7.6725 14.5186C8.70855 14.0121 9.84674 13.7492 11 13.75C12.1935 13.75 13.3238 14.0264 14.3275 14.52C14.6066 14.6575 14.9462 14.6163 15.1662 14.3949L15.1882 14.3743ZM12.4575 17.105C12.727 16.8355 12.7298 16.39 12.4025 16.1975C11.978 15.9456 11.4936 15.8127 11 15.8125C10.5064 15.8127 10.022 15.9456 9.5975 16.1975C9.27025 16.39 9.273 16.8355 9.5425 17.105L10.5132 18.0758C10.6422 18.2047 10.817 18.2771 10.9993 18.2771C11.1816 18.2771 11.3564 18.2047 11.4854 18.0758L12.4575 17.105Z"
                      fill="black"
                    />
                  </svg>
                  
                  <svg
                    className="mx-2"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4375 16.5625C3.4375 16.3802 3.50993 16.2053 3.63886 16.0764C3.7678 15.9474 3.94266 15.875 4.125 15.875H17.875C18.0573 15.875 18.2322 15.9474 18.3611 16.0764C18.4901 16.2053 18.5625 16.3802 18.5625 16.5625C18.5625 16.7448 18.4901 16.9197 18.3611 17.0486C18.2322 17.1776 18.0573 17.25 17.875 17.25H4.125C3.94266 17.25 3.7678 17.1776 3.63886 17.0486C3.50993 16.9197 3.4375 16.7448 3.4375 16.5625ZM19.2376 2.125L19.2706 2.12637C19.5273 2.14519 19.7782 2.21188 20.0104 2.323C20.1771 2.40082 20.3204 2.5213 20.4256 2.67225C20.5177 2.80975 20.625 3.05312 20.625 3.5V11.7376L20.6236 11.7706C20.6048 12.0273 20.5381 12.2782 20.427 12.5104C20.3492 12.6771 20.2287 12.8204 20.0778 12.9256C19.9403 13.0177 19.6969 13.125 19.25 13.125H2.76238L2.72938 13.1236C2.47268 13.1048 2.22178 13.0381 1.98962 12.927C1.82287 12.8492 1.67963 12.7287 1.57437 12.5778C1.48225 12.4403 1.375 12.1969 1.375 11.75V3.51237L1.37638 3.47937C1.39519 3.22268 1.46188 2.97178 1.573 2.73962C1.65082 2.57287 1.7713 2.42963 1.92225 2.32437C2.05975 2.23225 2.30312 2.125 2.75 2.125H19.2376ZM19.25 0.75H2.75C0 0.75 0 3.5 0 3.5V11.75C0 14.5 2.75 14.5 2.75 14.5H19.25C22 14.5 22 11.75 22 11.75V3.5C22 0.75 19.25 0.75 19.25 0.75Z"
                      fill="black"
                    />
                  </svg>
                  
                  <svg
                    className="mx-2"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5125 14.0231L20.3424 14.0607C20.1225 14.0886 19.8766 14.0685 19.6542 14.0686L1.67399 14.0666C0.842568 14.0244 0.72776 13.0478 0.628133 12.4122L0.48842 11.3896L0.372529 9.73346C0.35024 9.35438 0.339845 8.97523 0.339821 8.59577L0.34384 5.08028C0.346702 4.99512 0.360341 4.91154 0.36561 4.82681L0.439908 3.69531C0.501293 2.90471 0.401395 1.91572 1.45847 1.81978L19.9439 1.8174C20.1753 1.81734 20.4159 1.80413 20.6465 1.82029C21.2636 1.86356 21.4634 2.4376 21.5005 2.95596L21.6544 5.30127L21.6535 9.02692L21.6019 10.0687C21.5581 10.8813 21.4884 11.6833 21.3591 12.4873L21.2379 13.1216C21.1337 13.5567 20.9709 13.874 20.5125 14.0231ZM10.4334 2.48182L2.44174 2.4818C2.1187 2.48158 1.78354 2.46396 1.46181 2.48338C1.08233 2.50628 1.14273 3.34288 1.12184 3.63109L1.04453 4.71045L1.01206 7.01835L11.5747 6.56223L13.6753 6.56374C13.7821 6.5652 13.8882 6.59115 13.9971 6.59244L15.0659 6.59669C15.1445 6.59906 15.2241 6.61246 15.303 6.61693L16.9565 6.6996L20.5076 6.97082C20.6561 6.9832 20.8408 6.97439 20.9818 7.01688L20.947 4.44267L20.8586 3.38149C20.833 3.08127 20.9094 2.50353 20.5137 2.48342L10.4334 2.48182ZM11.6525 7.2273L7.53448 7.23194C7.36123 7.23658 7.18747 7.27031 7.01319 7.27693L5.77298 7.31315L1.44885 7.6505C1.30813 7.66189 1.15827 7.65953 1.01933 7.68135C1.06988 8.35055 1.0154 9.02164 1.06146 9.6916L1.1036 10.5886L1.30059 12.3303C1.34781 12.6283 1.40657 13.135 1.60311 13.3792C1.70034 13.4076 1.80823 13.4012 1.90864 13.4019L2.32804 13.3892C2.30696 13.3574 2.30584 13.3163 2.2968 13.2801L2.25462 13.1264C2.05555 12.4014 1.95337 11.6292 1.87985 10.8821L1.85575 10.5327C1.84833 10.449 1.83231 10.3669 1.8283 10.2823L1.81883 9.15054C1.81903 8.93651 1.83887 8.73211 2.07324 8.64536L2.08871 8.63947C2.17682 8.60875 2.29227 8.62142 2.385 8.62142L10.3608 8.62323L19.5237 8.62293C20.1117 8.62306 20.2042 8.61507 20.1991 9.29629L20.1926 9.94727C20.164 10.7694 20.0399 11.8547 19.8678 12.6707L19.681 13.3995C19.8831 13.4022 20.0895 13.4114 20.291 13.3929C20.5258 13.3714 20.5222 13.1664 20.5766 12.95C20.6569 12.6304 20.7069 12.3002 20.7518 11.974L20.9124 10.1846C20.9194 10.0531 20.9419 9.92295 20.9464 9.79129L20.977 8.09338C20.977 7.96903 20.9846 7.83935 20.9758 7.71551L11.6525 7.2273ZM3.92051 9.28465L2.61819 9.28533C2.57585 9.28533 2.52846 9.28035 2.48743 9.29096L2.49214 9.98413C2.49272 10.0934 2.48211 10.2157 2.49928 10.3233L18.1382 10.3238L19.4936 10.3237C19.5256 10.1723 19.5095 9.98392 19.5115 9.82674L19.5292 9.28246L3.92051 9.28465ZM2.56253 10.9892L2.67149 11.7043C2.68646 11.8075 2.68952 11.9344 2.72213 12.032L19.2959 12.0323L19.3077 11.9587C19.321 11.8402 19.4435 11.0295 19.4248 10.9938L2.56253 10.9892ZM7.90651 12.6937L2.82868 12.6985C2.8768 12.8104 3.02761 13.3481 3.07299 13.4022L14.1233 13.4029L18.9588 13.406C19.045 13.2266 19.0951 12.8195 19.1595 12.6992L7.90651 12.6937Z"
                      fill="black"
                    />
                    <path
                      d="M11.0778 5.86323C10.2164 5.90603 9.68426 4.89566 10.2335 4.24301C10.4148 4.02761 10.6497 3.89701 10.9314 3.87136C11.7687 3.82651 12.3256 4.8053 11.7788 5.47974C11.5986 5.70193 11.3599 5.83204 11.0778 5.86323ZM11.0058 4.53554C10.5805 4.625 10.5902 5.15988 11.0203 5.18209C11.4086 5.09886 11.4434 4.60339 11.0058 4.53554ZM7.08697 19.5984C6.81687 19.6218 6.5698 19.3213 6.74025 19.0783C6.81222 18.9757 6.97533 18.8999 7.0791 18.8265C7.50205 18.5274 8.10412 17.9776 8.0771 17.4269C8.0621 17.1214 7.90277 16.8352 7.85271 16.5344C7.78839 16.1479 7.91536 15.3942 8.35265 15.2452C8.53549 15.2314 8.66564 15.3383 8.72347 15.5123C8.7838 15.6937 8.6506 15.8347 8.58473 15.9941C8.20054 16.9234 9.74411 17.5784 7.59129 19.284C7.43566 19.4073 7.2774 19.5353 7.08697 19.5984ZM9.35163 20.1041C9.19626 20.0977 9.01154 20.0197 8.97549 19.8499C8.91146 19.5484 9.21719 19.4536 9.41153 19.3077C9.87173 18.9622 10.6027 18.2409 10.4856 17.6011C10.4336 17.3171 10.2911 17.0565 10.2349 16.773C10.1538 16.364 10.3019 15.3608 10.7957 15.2672C11.0069 15.254 11.2102 15.4261 11.178 15.6527C11.1505 15.8458 10.9389 16.0617 10.9042 16.347C10.8554 16.747 11.0941 17.1477 11.1665 17.5347C11.3379 18.45 10.485 19.3521 9.81475 19.8548C9.67222 19.9617 9.5306 20.0721 9.35163 20.1041ZM12.1129 20.1088C11.8444 20.1503 11.6051 19.8486 11.7059 19.6616L11.7168 19.6467C11.8113 19.5069 11.9813 19.4092 12.1118 19.3017C12.524 18.9623 13.1357 18.2721 12.9993 17.6773C12.9424 17.4292 12.7901 17.203 12.7056 16.9619C12.5507 16.5197 12.484 15.4664 13.057 15.2664C13.2446 15.2485 13.3742 15.3249 13.4423 15.51C13.4926 15.647 13.4383 15.7158 13.3814 15.8374C13.097 16.446 13.4225 16.8465 13.6146 17.3835C13.9494 18.3193 13.2045 19.271 12.531 19.8342C12.4028 19.9414 12.2722 20.0523 12.1129 20.1088Z"
                      fill="black"
                    />
                  </svg>
                </div> */}
                <div className="d-flex flex-column">
                  <h6 className="my-1">DEPARTAMETO</h6>  
                  <small className="my-1">CAPACIDAD: 12 PERSONAS</small>
                  <small className="my-1">Belgrano 515</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493516355967"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <img src={lasPencas} alt="Casa las pencas" />
              </div>
            </div>

            {/* piedra mora */}
            <div data-aos="fade-left" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>PIEDRA MORA</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">HOSPEDAJE</h6>  
                  <small className="my-1">CAPACIDAD: 18 PERSONAS</small>
                  <small className="my-1">Juan Pablo II y Sobremonte</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493522455430"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="card__Hospedaje__img">
                <img src={piedraMora} alt="hotel piedra mora" />
              </div>
            </div>

            {/* rosario garribia */}
            <div data-aos="fade-right" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>ROSARIO GARRIBIA</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">HOSPEDAJE</h6>  
                  <small className="my-1">CAPACIDAD: 6 PERSONAS</small>
                  <small className="my-1">San Martin 585</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493517520560"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <img src={garribia} alt="habitacion Maria Garribia" />
              </div>
            </div>
            {/* san francisco */}
            <div data-aos="fade-left" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>SAN FRANCISCO</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">DEPARTAMETO</h6>  
                  <small className="my-1">CAPACIDAD: 6 PERSONAS</small>
                  <small className="my-1">Gra. Paz 366</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493516249250"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <img src={sanFrancisco} alt="casa estadia san frnancisco" />
              </div>
            </div>
            {/* hotel damian */}
            <div data-aos="fade-right" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>HOTEL DAMIAN</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">DEPARTAMETO</h6>  
                  <small className="my-1">CAPACIDAD: 14 PERSONAS</small>
                  <small className="my-1">San Martin 287</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493522648201"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center border-start border-1 border-dark">
                <img src={damian} alt="Hotel Damian" />
              </div>
            </div>
            {/* miguel heredia */}
            <div data-aos="fade-left" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>MIGUEL HEREDIA</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">DEPARTAMETO</h6>  
                  <small className="my-1">CAPACIDAD: 5 PERSONAS</small>
                  <small className="my-1">Calle Alberdi</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+54935226249250"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center border-start border-1 border-dark">
                  <img src={miguelHeredia} alt="Departamento Miguel Heredia" />
              </div>
            </div>
            {/* Susi Bulacio */}
            <div data-aos="fade-left" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>SUSI BULACIOS</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">DEPARTAMETO</h6>  
                  <small className="my-1">CAPACIDAD: 4 PERSONAS</small>
                  <small className="my-1">Eva Duarte 252</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493522455147"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center border-start border-1 border-dark">
                  <img src={susi} alt="Departamento Susi Bulacio" />
              </div>
            </div>
            {/* Jacaranda */}
            <div data-aos="fade-left" className="card__Hospedaje m-3 d-flex justify-content-between">
              <div className="w-100 py-2 d-flex flex-column justify-content-evenly text-center">
                <h4>JACARANDA</h4>
                <div className="d-flex flex-column">
                  <h6 className="my-1">DEPARTAMETO</h6>  
                  <small className="my-1">CAPACIDAD: 6 PERSONAS</small>
                  <small className="my-1">Avellaneda 107 esq. San Martin</small>
                </div>
                <a
                  className="llamar mb-1 py-2 m-2 mx-auto w-75"
                  href="tel:+5493522543383"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center border-start border-1 border-dark">
                  <img src={jacaranda} alt="Jacaranda" />
              </div>
            </div>
          </article>
          
      </section>
{/* COMIENZO DE GASTRONOMIA */}
        {isLargeScreen ? (
          <section>
          <h3 className="py-3">GASTRONOMIA</h3>

              <div data-aos="fade-up" className="d-flex justify-content-evenly">
                 {/* Nuevo rancho */}
                 <div className="card__gastronomia m-3 d-flex flex-column text-center">
                    <img src={nuevoRancho} alt="Nuevo Rancho" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493516144200"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* LA PREVIA */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={laprevia} alt="La previa" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493513732290"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* ENCUENTROS */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={encuentros} alt="bar encuentos" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493522650648"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* EL CRUCE */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={elcruce} alt="bar el cruce" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493516528371"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
              
                  {/* NACHA */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={nacha} alt="logo nacha food tru" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493522456756"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* BAR LA TERMINAL */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={bar} alt="bar la terminal" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493512109971"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* BAR-HOTEL DAMINA */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={barDamian} alt="BAR DAMINA" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493522648201"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>           
              </div>
          </section>
      ) : (
        <section>
          <h3 className="py-3">GASTRONOMIA</h3>

          <div id="carouselExampleIndicators" data-aos="fade-up" className="carousel slide">
  
            <div className="carousel-inner">
              <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                 {/* Nuevo rancho */}
                 <div className="card__gastronomia m-3 d-flex flex-column text-center">
                    <img src={nuevoRancho} alt="Nuevo Rancho" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493516144200"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* LA PREVIA */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={laprevia} alt="La previa" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493513732290"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* ENCUENTROS */}
                  <div className="card__gastronomia m-3 d-flex flex-column text-center">
                    <img src={encuentros} alt="bar encuentos" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493522650648"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* EL CRUCE */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={elcruce} alt="bar el cruce" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493516528371"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
              <div className=" d-flex justify-content-center">
                  {/* NACHA */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={nacha} alt="logo nacha food tru" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493522456756"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* BAR LA TERMINAL */}
                  <div className="card__gastronomia m-3 d-flex flex-column text-center">
                    <img src={bar} alt="bar la terminal" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493512109971"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* BAR-HOTEL DAMINA */}
                  <div className="card__gastronomia my-3 d-flex flex-column text-center">
                    <img src={barDamian} alt="BAR DAMINA" />
                    <a
                      className="llamar py-2"
                      href="tel:+5493522648201"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.48124 1.99214C5.39269 1.87823 5.28091 1.78447 5.15334 1.71707C5.02577 1.64968 4.88531 1.61021 4.74131 1.60127C4.59731 1.59233 4.45306 1.61414 4.31813 1.66523C4.1832 1.71633 4.06069 1.79555 3.95874 1.89764L2.40774 3.45014C1.68324 4.17614 1.41624 5.20364 1.73274 6.10514C3.04783 9.8358 5.18447 13.2232 7.98474 16.0171C10.7786 18.8174 14.1661 20.954 17.8967 22.2691C18.7982 22.5856 19.8257 22.3186 20.5517 21.5941L22.1027 20.0431C22.2048 19.9412 22.284 19.8187 22.3351 19.6837C22.3862 19.5488 22.408 19.4046 22.3991 19.2606C22.3902 19.1166 22.3507 18.9761 22.2833 18.8485C22.2159 18.721 22.1221 18.6092 22.0082 18.5206L18.5477 15.8296C18.4259 15.7354 18.2844 15.6701 18.1337 15.6384C17.9831 15.6067 17.8272 15.6095 17.6777 15.6466L14.3927 16.4671C13.9542 16.576 13.495 16.5698 13.0596 16.4492C12.6242 16.3286 12.2272 16.0976 11.9072 15.7786L8.22324 12.0931C7.90401 11.7733 7.67276 11.3764 7.55188 10.941C7.431 10.5056 7.42458 10.0463 7.53324 9.60764L8.35524 6.32264C8.39237 6.17321 8.3952 6.01732 8.36351 5.86665C8.33182 5.71598 8.26642 5.57444 8.17224 5.45264L5.48124 1.99214ZM2.82624 0.766637C3.08873 0.504062 3.40408 0.300333 3.75134 0.168979C4.09861 0.0376255 4.46985 -0.0183475 4.84041 0.00477688C5.21097 0.0279013 5.57237 0.129594 5.90061 0.303102C6.22885 0.476611 6.51642 0.717965 6.74424 1.01114L9.43524 4.47014C9.92874 5.10464 10.1027 5.93114 9.90774 6.71114L9.08724 9.99614C9.04511 10.1663 9.04755 10.3444 9.09432 10.5134C9.14108 10.6823 9.2306 10.8364 9.35424 10.9606L13.0397 14.6461C13.1642 14.77 13.3184 14.8597 13.4877 14.9065C13.6569 14.9532 13.8354 14.9555 14.0057 14.9131L17.2892 14.0926C17.6742 13.997 18.0758 13.9898 18.464 14.0716C18.8521 14.1534 19.2167 14.3222 19.5302 14.5651L22.9892 17.2561C24.2327 18.2236 24.3467 20.0611 23.2337 21.1726L21.6827 22.7236C20.5727 23.8336 18.9137 24.3211 17.3672 23.7766C13.4082 22.3855 9.81404 20.1193 6.85224 17.1466C3.87979 14.1853 1.61356 10.5916 0.222236 6.63314C-0.320764 5.08814 0.166736 3.42764 1.27674 2.31764L2.82624 0.766637Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>

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
