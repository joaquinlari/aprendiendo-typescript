import { useState } from "react";
import { TasksList } from "./TasksList";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasksList, setTasksList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasksList((tareasAnteriores) => [...tareasAnteriores, newTask]);
    setNewTask("");
  };

  const handleBorrarTarea = (index: number) => {
    setTasksList((tareasActuales) =>
      tareasActuales.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escriba una nueva tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <TasksList tasksList={tasksList} borrarTarea={handleBorrarTarea} />
    </div>
  );
};
