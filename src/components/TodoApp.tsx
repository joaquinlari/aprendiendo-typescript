import { useState } from "react";

export const TodoApp = () => {
  const [newTarea, setNewTarea] = useState("");

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
    </div>
  );
};
