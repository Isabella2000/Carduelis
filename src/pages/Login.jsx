import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/App.css";
import sanrioLogin from "../assets/image/sanrioLogin.jpg";

const Login = () => {
  document.body.style = `background: #f7e9e4`;

  return (
    <div>
      <div className="contenedor-1">
        <div className="contenedor-2">
          <div className="contenedor-3">
            <div className="contenido-1">
              <div className="cabeza-sesion">
                <h2>Inicio Sesion</h2>
              </div>
              <input type="text" placeholder="Usuario" />
              <input type="passowrd" placeholder="Contraseña" />
              <input type="button" className="ingresar" value="INGRESAR" />

              <div>
                <NavLink className="no-deco" id="link" to="/registro">
                  ¿No tienes cuenta? Registrate
                </NavLink>
              </div>
            </div>
          </div>

          <div className="contenedor-4">
            <div className="contenido-2">
              <div className="welcome">
                {" "}
                <h2>Welcome!</h2>
              </div>

              <img
                src={sanrioLogin}
                alt="sanrioLogin"
                className="sanriologin"
              />
              <div className="olvide">
                <NavLink className="no-deco" id="link" to="/olvide-clave">
                  ¿Olvidaste contraseña?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
