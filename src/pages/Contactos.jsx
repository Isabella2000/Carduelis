import React from "react";

import { NavLink } from "react-router-dom";

import rosap1 from "../assets/image/rosap1.jpg"
import gatop2 from "../assets/image/gatop2.jpg"
import casap3 from "../assets/image/casap3.jpg"
import gatogr1 from "../assets/image/gatogr1.jpg"
import frutagr2 from "../assets/image/frutagr2.jpg"
import floresgr3 from "../assets/image/floresgr3.jpg"

const Contactos = () => {
  document.body.style = `background: #fffaee `;

  return (
    <>
      <div className="contenedorCon1">
        <div className="contenedorCon2">
          <div className="cabeza-sesion">
            <h2 className="letra">Welcome!</h2>
          </div>
          <div className="contLetra">
            <label className="letrasnormales">
              Con muchas cards, siempre encontrarás ideas que despierten tu
              inspiración. Para descubrimiento visual para encontrar ideas como
              recetas, inspiracion para el hogar, tu estilo y aesthetic, y mucho
              mas
            </label>
          </div>

          <div className="opcH">
                <NavLink className="no-deco" id="link" to="/login">
                  Inicia sesion aqui
                </NavLink>
                <i id="flecha" class="bi bi-arrow-right"></i>
              </div>

          <div className="red">
            <label className="letras"> Siguenos</label>
            <i class="bi bi-twitter "></i>
            <i class="bi bi-github"></i>
            <i class="bi bi-youtube"></i>
          </div>
        </div>


        <div className="contenedorH3">
          <div className="contenedorH4">
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

        {/* <div className="welcome"> <h2>Hiiii!</h2></div> */}

        {/* <div className="imgc">
                <img src="https://i.pinimg.com/originals/e8/ca/ad/e8caadf015656f0f18f894e17f0f1ee1.gif" alt="pastocute" />
              </div> */}
      </div>
    </>
  );
};

export default Contactos;
