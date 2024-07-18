import React, { useState } from "react";
import Nota from "./assets/components/Nota/Nota";
import Filtro from "./assets/components/Filtro/Filtro";
import './App.css'; 
import NotaLista from "./assets/components/NotaLista/NotaLista";

const App = () => {
  
const [listaTareas, setListaTareas] = useState([]);

const agregarNota = (nuevaNota) => {
  setListaTareas([...listaTareas, nuevaNota]);
};

  return (
    <>
        <div className="container">
            <div>
              <h1 className="text-center mt-5">Notas</h1>
              <Nota agregarNota={agregarNota}/>
              <Filtro tareas={listaTareas} setTareas={setListaTareas}/>
              <NotaLista tareas={listaTareas} setTareas={setListaTareas}/>
            </div>
        </div>
    </>
  );
};

export default App;
