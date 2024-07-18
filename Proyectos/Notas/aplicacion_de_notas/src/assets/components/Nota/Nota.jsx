import { useState } from "react";

const Nota = ({ agregarNota }) => {

  const [texto, setTexto] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const handleTextoChange = (e) => {
    setTexto(e.target.value);
  };

  const handlePrioridadChange = (e) => {
    setPrioridad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto === "" || prioridad === "") {
      alert("Ingrese todos los campos");
      return;
    }
  
    const nuevaNota = { texto, prioridad };
    agregarNota(nuevaNota);
    setTexto("");
    setPrioridad("");
     
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          id="disabledTextInput"
          className="form-control custom-select-width"
          placeholder="Escribe tu nota"
          value={texto}
          onChange={handleTextoChange}
        />
      </div>
      <div className="mb-3">
        <select 
        className="form-select custom-select-width" 
        aria-label="Default select example"
        value={prioridad}
        onChange={handlePrioridadChange}
        >
          <option value="">Seleccione Prioridad</option>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar Nota
      </button>
    </form>
  );
};

export default Nota;
