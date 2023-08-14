import React from "react";
import forma from "../assets/image/forma.svg";
import curva from "../assets/image/curva.png";
import logoxd from "../assets/image/logoxd.png";

const Footer = () => {
  // // // document.body.style = `background: #7e998d `;

  return (
    <div>
      <div className="footer">
        <div className="imgfooter">
          <div className="curva"></div>
          {/* <img
          //  src={curva}
          // src={forma}
          //  src="https://uploads-ssl.webflow.com/606c72430ed06a83bfef43de/60f1ca0000a7a4da5be2d121_section-transition-6.svg"
          alt="curva"
           className="curva"
         /> */}
        </div>
        <div className="contenedorF1">
          <div className="parte1">
            <div className="logoxd">
              <img src={logoxd} alt="logoxd" />
            </div>
          </div>

          <div className="contenedorF2">
          <div className="parte2">
            <label className="subtitulo">Síganos</label>
            <label className="letrasnormales">
              Siguenos en todas nuestras redes para saber mas de nosotros.{" "}
            </label>
          </div>

          <div className="parte3">
            <label className="subtitulo">Carduelis Carduelis</label>
            <p className="letrasnormales">Stationsstraat 38 9120</p>
            <p className="letrasnormales">Beveren IVA BE0859 699 518</p>
          </div>

          <div className="parte4">
            <label className="subtitulo">Contacto</label>

            <div className="letrasnormales">
              <p className="bold">Correo electrónico</p>

              <p>
                <a className="letrasnormales">Ccarduelis@gmail.com</a>
              </p>

              <p className="bold">Telefono</p>
              <label className="letrasnormales">3012911437</label>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
