import React from 'react'
import {useState} from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/App.css";

import Axios from "../../src/config/axios.jsx";


const Registro = () => {
  const [email, setEmail] = useState("");
  const [nombreusuario, setNombreusuario] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [edad, setEdad] = useState("");
  const [pais, setPais] = useState("");


  const handleSudmit = async (e) => {
    e.preventDefault();

    // Creando el usuario en la API

    try {
      const { data } = await clienteAxios.post("/usuarios", {
        email,
        nombreusuario,
        password,
        telefono,
        genero,
        edad,
        pais
      });

      // const { data } = await axios.post("http://localhost:4000/api/usuarios", {
      //   nombreusuario,
      //   email,
      //   password,
      //   telefono,
      //   direccion,
      //   web,
      // });

      console.log(data);


      setEmail("");
      setNombreusuario("");
      setPassword("");
      setRepetirPassword("");
      setTelefono("");
      setDireccion("");
      setWeb("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };


  return (
    <div>

      <div className="contenedor-1">
        <div className="contenedor-2">

          <div className="contenedor-3">

            <div id="contenidoRes1" className="contenido-1">
              <div className="cabeza-sesion">
                <h2>Registro</h2>
              </div>
              
              <input 
              type="text" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

              <input type="text" 
              placeholder="Name usuario"
              value={nombreusuario}
              onChange={(e) => setNombreusuario(e.target.value)} />

              <input type="passowrd" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

              <input type="number" 
              placeholder='Telefono'
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)} />

              <div className='casilla1'>
                <select name="Genero" id="genero" placeholder='Genero'
                value={genero}
                onChange={(e) => setGenero(e.target.value)}>
                  <option selected disabled>genero</option>
                  <option>Femenino</option>
                  <option>Masculino</option>
                  <option>Transformer</option>
                </select>

                <input type="number" 
                placeholder='Edad'
                id="edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)} />
              </div>

              <input type="text" 
              placeholder="Pais"
              value={pais}
              onChange={(e) => setPais(e.target.value)} />

              <input type="button" className="ingresar" value="INGRESAR" />
              <div>
                <NavLink className="no-deco" id="link" to="/login">¿Ya tienes cuenta? Inicia sesion</NavLink>
              </div>
            </div>

          </div>

          <div className="contenedor-4">
            <div className="contenidoRes2">
              <div className="welcome"> <h2>Welcome!</h2></div>

              <div className="imagev">
                <img src="https://i.pinimg.com/originals/6a/8a/cf/6a8acfe5d27e516abbf57e74e9849d7d.gif" alt="sanrioregistro" />
                {/* <img src={verde} alt="pastocute" /> */}
              </div>

              {/* <div className="olvide">
              <NavLink className="no-deco" id="link" to="/olvide-clave">¿Olvidaste contraseña?</NavLink>
            </div> */}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Registro