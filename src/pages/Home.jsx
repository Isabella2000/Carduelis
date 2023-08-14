import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import rosap1 from "../assets/image/rosap1.jpg";
import gatop2 from "../assets/image/gatop2.jpg";
import casap3 from "../assets/image/casap3.jpg";
import gatogr1 from "../assets/image/gatogr1.jpg";
import frutagr2 from "../assets/image/frutagr2.jpg";
import floresgr3 from "../assets/image/floresgr3.jpg";

const Home = () => {
  const [fade, setFade] = useState("");

  //No se como pero esto hace que salga xd
  useEffect(() => setFade("fade-right"), []);

  document.body.style = `background: #f7e9e4`;

  // src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
  AOS.init();

  return (
    <>
      <div className="contenedorH1">
        <div className="contenedorH2 animate__animated animate__fadeInDown">
           <div className="contenedorH2A">
            <div className="opcH2">
              <NavLink className="no-deco" id="link" to="/prueba-image">
                Haga una prueba para subir una Card
              </NavLink>
              <i id="flecha" class="bi bi-arrow-right"></i>
            </div>
          </div> 

          <div className="contenedorH2B">
            <div className="cabeza-sesion">
              <h2 className="Htitulo ">Welcome!</h2>
            </div>
            <div className="HLetra">
              <label className="letrasnormales">
                Con muchas cards, siempre encontrarás ideas que despierten tu
                inspiración. Para descubrimiento visual para encontrar ideas
                como recetas, inspiracion para el hogar, tu estilo y aesthetic,
                y mucho mas
              </label>
            </div>

            <div className="opcH">
              <NavLink className="no-deco" id="link" to="/login">
                Inicia sesion aqui
              </NavLink>
              <i id="flecha" class="bi bi-arrow-right"></i>
            </div>

            <div className="red">
              <label className="letras">Siguenos</label>
              <i id="redo" class="bi bi-twitter "></i>
              <i id="redo" class="bi bi-youtube"></i>
              <i id="redo" class="bi bi-github"></i>
            </div>
          </div>
        </div>

        <div className="contenedorH3">
          <div className="contenedorH4 animate__animated animate__fadeInDown">
            <div className="Homeimg">
              <div className="Himg1">
                <img className="image" src={rosap1} alt="rositap" />
              </div>
              <div className="Himg2">
                <img className="image" src={gatogr1} alt="gatogr" />
              </div>
            </div>

            <div className="Homeimg">
              <div className="Himg1">
                <img className="image" src={frutagr2} alt="frutagr" />
              </div>
              <div className="Himg2">
                <img className="image" src={gatop2} alt="gatop" />
              </div>
            </div>

            <div className="Homeimg">
              <div className="Himg1">
                <img className="image" src={casap3} alt="casap" />
              </div>
              <div className="Himg2">
                <img className="image" src={floresgr3} alt="rositapflorgr" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -=--parte scroll bar mas contenido---------------------------------------------------------------------------------- */}

      <div className="contenedorH5">
        <div className="hencabezado">
          <h1 className="titulodescubre animate__animated animate__fadeInDown">
            Descubre mas de tus gustos
          </h1>
        </div>

        {/* -------------parte1------------------- */}
        <div className="Hparte" data-aos="fade-right">
          <div className="parteverdeneutro" id="parte-escencial">
            <div className="sesion1H">
              <div className="cabeza-sesion">
                <h4 className="Htitulo">Cocina</h4>
              </div>
              <div className="HLetra">
                <label className="letrascroll">
                  Con muchas cards, para inspirarte a la hora de cocinar, con
                  muchas recetas y mas.
                </label>
              </div>

              <div className="opcH">
                <NavLink className="no-deco" id="link" to="/login">
                  Inicia sesion aqui
                </NavLink>
                <i id="flecha" class="bi bi-arrow-right"></i>
              </div>
            </div>

            <div className="sesion2H">
              <div className="sesionimg" data-aos="fade-up">
                <img
                  className="imgH"
                  src="https://i.pinimg.com/564x/56/5a/e5/565ae5a1e04789e1054920a427c0cb36.jpg"
                  alt="paste aesteti"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------------parte2 reverse------------------- */}
        <div className="Hparte" id="reverse" data-aos="fade-left">
          <div className="parterosada" id="parte-escencial">
            <div className="sesion1H" id="sesionReversa">
              <div className="cabeza-sesion">
                <h4 className="Htitulo wow animate__fadeInDown">Clothes</h4>
              </div>
              <div className="HLetra">
                <label className="letrascroll">
                  Con muchas cards, para inspirarte a la hora de escoger ropa y
                  accesorios, con todo tipo de ideas y estilos de ropa para
                  encontrar tu identidad.
                </label>
              </div>

              <div className="opcH">
                <NavLink className="no-deco" id="link" to="/login">
                  Inicia sesion aqui
                </NavLink>
                <i id="flecha" class="bi bi-arrow-right"></i>
              </div>
            </div>

            <div className="sesion2H">
              <div className="sesionimg" data-aos="fade-up">
                <img
                  className="imgH"
                  src="https://i.pinimg.com/564x/ee/a8/83/eea88368590d1800c8ab2efc7f49437f.jpg"
                  alt="clothes aesteti"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------------parte3------------------- */}
        <div className="Hparte" data-aos="fade-right">
          <div className="parteverdeclaro" id="parte-escencial">
            <div className="sesion1H">
              <div className="cabeza-sesion">
                <h4 className="Htitulo wow animate__fadeInDown">Plantitas</h4>
              </div>
              <div className="HLetra">
                <label className="letrascroll">
                  Con muchas cards, para relajarte con la naturaleza y admirar
                  la belleza de las plantas, y crear tu propio bomnito jardin.
                </label>
              </div>

              <div className="opcH">
                <NavLink className="no-deco" id="link" to="/login">
                  Inicia sesion aqui
                </NavLink>
                <i id="flecha" class="bi bi-arrow-right"></i>
              </div>
            </div>

            <div className="sesion2H">
              <div className="sesionimg" data-aos="fade-up">
                <img
                  className="imgH"
                  src="https://i.pinimg.com/564x/9a/6a/11/9a6a117749471684d37bb0820a5eafcf.jpg"
                  alt="paste aesteti"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------------parte4--reverse----------------- */}
        <div className="Hparte" id="reverse" data-aos="fade-left">
          <div className="parteamarilloscuro" id="parte-escencial">
            <div className="sesion1H" id="sesionReversa">
              <div className="cabeza-sesion">
                <h4 className="Htitulo wow animate__fadeInDown">Animales</h4>
              </div>
              <div className="HLetra">
                <label className="letrascroll">
                  Con muchas cards, para ver la ternura de los animales y aaaa
                  estan muy bomnitos los mishisssssssssss, y unos conejitos.
                </label>
              </div>

              <div className="opcH">
                <NavLink className="no-deco" id="link" to="/login">
                  Inicia sesion aqui
                </NavLink>
                <i id="flecha" class="bi bi-arrow-right"></i>
              </div>
            </div>

            <div className="sesion2H">
              <div className="sesionimg" data-aos="fade-up">
                <img
                  className="imgH"
                  src="https://i.pinimg.com/564x/a0/ef/9e/a0ef9eafe4b489af0dd52c4524e127c1.jpg"
                  alt="paste aesteti"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -------------parte5------------------- */}
        <div className="Hparte" data-aos="fade-right">
          <div className="parteamarilla" id="parte-escencial">
            <div className="sesion1H">
              <div className="cabeza-sesion">
                <h4 className="Htitulo">Lugares</h4>
              </div>
              <div className="HLetra">
                <label className="letrascroll">
                  Con muchas cards, de cada zona hermosa del mundo, desde el
                  polo norte hasta el desierto. Te encantara admirar la belleza
                  de cada lugar justo a <strong>Carduelis Carduelis</strong>.
                </label>
              </div>

              <div className="opcH">
                <NavLink className="no-deco" id="link" to="/login">
                  Inicia sesion aqui
                </NavLink>
                <i id="flecha" class="bi bi-arrow-right"></i>
              </div>
            </div>

            <div className="sesion2H" data-aos="fade-up">
              <div className="sesionimg">
                <img
                  className="imgH"
                  src="https://i.pinimg.com/564x/f7/96/ac/f796ac13bcf376b839edc5f4efd77565.jpg"
                  alt="paste aesteti"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
