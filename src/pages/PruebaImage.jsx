import React from "react";
import card from "../assets/image/estructura-card.jpeg"
import logoxd from "../assets/image/logoxd.png"

const PruebaImage = () => {
  return (
    <div>
      <div className="contenedorP1">
        <div className="logoP">
          <img src={logoxd} alt="logoxd" />
        </div>
        <div>
          <div className="tituloseparado">
            <h2>
              Bienvenido<label className="letrainvisible">a</label> a
              <label className="letrainvisible">a</label> Carduelis{" "}
              <label className="letrainvisible">a</label>carduelis{" "}
            </h2>
          </div>
          <p className="letrasnormales">
            La Red Social donde podras compartir cards, fotos, imagenes, de lo
            que tu quieras
          </p>
          <p className="letrasnormales" id="letraP">
            Prueba subiendo una card de la img que tu quieras
          </p>
        </div>
      </div>

      <div className="contenedorP2">
        <h2>Estructura card</h2>
        <img src={card} alt="Estructura de una card" />
      </div>
    </div>
  );
};

export default PruebaImage;
