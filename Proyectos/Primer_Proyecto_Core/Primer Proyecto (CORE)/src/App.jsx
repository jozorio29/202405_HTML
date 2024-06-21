import { useState } from "react";
import "./App.css";

function App() {
  const tareas = [
    "Aprender React",
    "Construir una aplicacion con Vite",
    "Dominar el JSX",
  ];

  return (
    <>
      <div className="APP">
        <header className="App-header">
          <h1>¡Bienvenido a mi aplicacion de React!</h1>
          <div>
            <h2>Lista de cosas por hacer:</h2>
            <p>Aprender React</p>
            <p>Practicar con Vite</p>
            <p>Construir proyectos increibles</p>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
