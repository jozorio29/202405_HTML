const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStock }) => {

    const stockColor = enStock === "En stock" ? "green" : "red";
    
  return (
    <div className="col-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nombreProducto}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary mt-3">{precio}</h6>
          <p className="card-text">{descripcion}</p>
          <p style={{ color: stockColor}}>{enStock}</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
