import { useState } from "react";


const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStock }) => {

    const [cantidad, setCantidad] = useState(enStock);

    const controlDeCompra = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
      }
    };
    
  return (
    <div className="col-3" >
      <div className="card">
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5 className="card-title">{nombreProducto}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary mt-3">{precio}</h6>
          <p className="card-text">{descripcion}</p>
          {cantidad > 0 ? (
            <p style={{ color: "green"}}>En stock: {cantidad}</p>
          ) : (
            <p style={{ color: "red"}}>Agotado</p>
          )}
          <button 
            className="btn btn-primary" 
            onClick={controlDeCompra}
            disabled={cantidad === 0}
            >Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
