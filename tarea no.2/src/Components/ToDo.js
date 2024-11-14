import React, { useState } from 'react';

export const ToDo = () =>{
    const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const agregarLista = (e) => {
    e.preventDefault(); 
    return setLista([...lista, tarea]);
  };

    return (

        <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={(e) => agregarLista(e)}>
        <input
          type="text"
          name="tarea"
          id="tarea"
          placeholder="Descripcion tarea"
          onChange={(e) => setTarea(e.target.value)}
        />
        <button
          type="submit"
        >
          Agregar
        </button>
      </form>

      <ul>
        {lista.map((item) => (
          <li key={item.toString()}>{item}</li>
        ))}
      </ul>
    </div>
    )


}

export default ToDo;