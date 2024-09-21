type Tarea = {
  tarea: string;
  deleteTask: () => void;
};

export const Tarea = ({ tarea, deleteTask }: Tarea) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={deleteTask}>Borrar</button>
    </div>
  );
};
