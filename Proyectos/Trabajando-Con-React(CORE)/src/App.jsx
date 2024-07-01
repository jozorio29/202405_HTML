import React from "react";
import TarjetaProducto from "./components/Tarjeta/TarjetaProducto";
import Contenedor from "./components/Contenedor/Contenedor";


function App() {
  return (
    <>
      <Contenedor>
        <h1>TechStore - Tu Destino para la mejor Tecnología</h1>
        <hr />
        <div className="row">
            <TarjetaProducto  nombreProducto="Laptop" 
                              precio="$1500" 
                              descripcion="Una potente laptop para trabajar y jugar." 
                              enStock={10} />
            <TarjetaProducto nombreProducto="Smartphone" 
                              precio="$800" 
                              descripcion="Un smartphone de última generación." 
                              enStock={0} />
            <TarjetaProducto nombreProducto="Auriculares" 
                              precio="$200" 
                              descripcion="Auriculares con cancelación de ruido." 
                              enStock={5} />
            <TarjetaProducto nombreProducto="Monitor" 
                              precio="$300" 
                              descripcion="Monitor 4k para una experiencia visual increible." 
                              enStock={20} />
        </div>
      </Contenedor>
    </>
  );
}

export default App;
