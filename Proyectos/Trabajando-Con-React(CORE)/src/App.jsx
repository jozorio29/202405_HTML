import React from "react";
import TarjetaProducto from "./components/Tarjeta/TarjetaProducto";
import Contenedor from "./components/Contenedor/Contenedor";

function App() {
  return (
    <>
      <Contenedor>
        <h1>Trabajando con Props (Core)</h1>
        <hr />
        <div className="row">
            <TarjetaProducto  nombreProducto="Laptop" 
                              precio="$1500" 
                              descripcion="Una potente laptop para trabajar y jugar." 
                              enStock="En stock" />
            <TarjetaProducto nombreProducto="Smartphone" 
                              precio="$800" 
                              descripcion="Un smartphone de última generación." 
                              enStock="Agotado" />
            <TarjetaProducto nombreProducto="Auriculares" 
                              precio="$200" 
                              descripcion="Auriculares con cancelación de ruido." 
                              enStock="En stock" />
            <TarjetaProducto nombreProducto="Monitor" 
                              precio="$300" 
                              descripcion="Monitor 4k para una experiencia visual increible." 
                              enStock="En stock" />
        </div>
      </Contenedor>
    </>
  );
}

export default App;
