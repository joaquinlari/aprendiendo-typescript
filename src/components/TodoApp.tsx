import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };

  const handleBorrarTarea = (index: number) => {};
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escriba una nueva tarea"
      />
      <button onClick={handleAddTask}></button>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  );
};
