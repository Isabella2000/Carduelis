import React from 'react'
import { NavLink } from "react-router-dom"

const Navegacion = () => {
  // mas raaaaro
  //  tooglemenu=()=>
  //   document.body.classList.toogle("open");

  return (
    <div>
      <nav >
        <img src="https://i.pinimg.com/originals/a1/19/71/a11971f5e4c85acca10de4fdf759413f.gif" alt="hikitty" />
        <div className='opciones'>
          <div className='opcion-1'>
            <NavLink id="link" className="no-deco" to="/home">
               Home
            </NavLink>
          </div>

          <div className='opcion-2'>
            <NavLink id="link" className="no-deco" to="/contactos">
              Contactos
            </NavLink>
          </div>
          
          <div className='opcion-3'>
            <NavLink  id="link" className="no-deco" to="/login">
             Login
            </NavLink>
          </div>
        </div>

      </nav>


    </div>
  )
}

export default Navegacion