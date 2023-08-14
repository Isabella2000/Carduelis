import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

// layout
import Layout from "./layout/Layout"

// paginas
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import OlvideClave from "./pages/OlvideClave"
import Contactos from "./pages/Contactos"
import Home from "./pages/Home"
import PruebaImage from "./pages/PruebaImage"

function App() {

  return (
    <BrowserRouter>
      {/* rutas publicas */}
      
      <Routes>
          <Route path="/" element={<Layout/>}>
          {/* <Route index element={<Login/>}/> */}
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="prueba-image" element={<PruebaImage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registro" element={<Registro/>}/>
          <Route path="olvide-clave" element={<OlvideClave/>}/>
          <Route path="contactos" element={<Contactos/>}/>
          {/* <Route path="acerca-de" element={<AcercaDe/>}/> */}
  
        </Route>
      </Routes>
      
      {/* rutas privadas */} 

    </BrowserRouter>
  )
}

export default App
