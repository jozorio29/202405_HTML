import React from 'react'

const NotaLista = ({ tareas, setTareas }) => {
    const eliminarTarea = (index) => {
        const listaTemporalTarea = [...tareas];
        listaTemporalTarea.splice(index, 1);
        setTareas(listaTemporalTarea);
    };

  return (
    <div>
        <ul>
            {tareas.map(( nota, index ) => (
                <li key={index}>
                    {nota.nota} - {nota.prioridad}
                    <button onClick={() => eliminarTarea(index)}>
                        Eliminar
                    </button>
                </li>
            )
            )}
        </ul>
    </div>
  );
};

export default NotaLista;