import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/App.css";
import sanriosinclave from "../assets/image/sanriosinclave.gif";

const OlvideClave = () => {
  return (
    <div>
      <div className="contenedor-1">
        <div className="contenedor-2">
          <div className="contenedor-3">
            <div className="contenido-1">
              <div className="cabeza-sesion">
                <h2>Olvide Contraseña</h2>
              </div>
              <input type="text" placeholder="Usuario" />
              <input type="passowrd" placeholder="Contraseña anterior" />
              <input type="button" className="ingresar" value="INGRESAR" />

              <div>
                <NavLink className="no-deco" id="link" to="/login">
                  ¿Recordaste? Vuelve al Login{" "}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="contenedor-4">
            <div className="contenido-2">
              <div className="welcome">
                <h2>Welcome!</h2>
              </div>
              <img
                src={sanriosinclave}
                alt="sanriosinclave"
                className="sanriologin"
              />

              <div className="olvide">
                <NavLink className="no-deco" id="link" to="/registro">
                  ¿No tienes cuenta? Registrate
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlvideClave;
