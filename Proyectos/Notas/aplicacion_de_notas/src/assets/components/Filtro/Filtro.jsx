import { useState } from "react";
import styles from "./Filtro.module.css"

const Filtro = ({ tareas }) => {

  const [selector, setSelector] = useState("");

  const filtroPrioridad = selector === ""
    ? tareas 
    : tareas.filter((obj) => obj.prioridad === selector);

  const handleSelecChange = (e) => {
    setSelector(e.target.value);
  };



  return (
    <div className={styles.container}>
        <select 
          className="form-select" 
          aria-label="Default select example"
          value={selector}
          onChange={handleSelecChange}
          >
            <option value="Todas">Todas</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
        </select>

        <ul>
            {filtroPrioridad.map((obj, index) => (
              <li key={index}>
                {obj.texto} - {obj.prioridad} 
              </li>
            ))}
        </ul>
    </div>
  );
};

export default Filtro;