import { Tarea } from "./Tarea";

type TasksList = {
  tasksList: string[];
  deleteTask: (index: number) => void;
};

export const TasksList = ({ tasksList, deleteTask }: TasksList) => {
  return (
    <div className="task-list">
      {tasksList.map((tarea, index) => {
        return (
          <Tarea
            key={index}
            tarea={tarea}
            deleteTask={() => deleteTask(index)}
          />
        );
      })}
    </div>
  );
};
