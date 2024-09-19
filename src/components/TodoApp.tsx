import { useState } from "react";
import {ListaTareas} from './ListaTareas'

export const TodoApp = () => {
  const [newTarea, setNewTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () = {
    
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTarea}
        onChange={(e) => setNewTarea(e.target.value)}
        placeholder="Escriba una nueva tarea"
      />
      <button onClick={handleAddTask}></button>
      <ListaTareas listaTareas={} borrarTarea={}/>
    </div>
  );
};
