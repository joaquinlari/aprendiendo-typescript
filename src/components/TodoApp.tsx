import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [nuevaTarea, setNewTask] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNewTask("");
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareasActuales) =>
      tareasActuales.filter((_, i) => i !== index)
    );
  };
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escriba una nueva tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  );
};
