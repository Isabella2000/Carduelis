
import {Outlet} from "react-router-dom";

// compinents
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';


const layout = () => {
  return (
    <div className="layout">
      <Header/>
      <Navegacion/>

      {/* contendio central */}
      <div className='main'>
        <Outlet/>

      </div>


      {/* fin contenido central */}
      <Footer/>
    </div>
  )
}

export default layout