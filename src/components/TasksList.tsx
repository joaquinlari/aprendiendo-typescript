import { Tarea } from "./Tarea";

type TasksList = {
  tasksList: string[];
  borrarTarea: (index: number) => void;
};

export const TasksList = ({ tasksList, borrarTarea }: TasksList) => {
  return (
    <div className="task-list">
      {tasksList.map((tarea, index) => {
        return (
          <Tarea
            key={index}
            tarea={tarea}
            borrarTarea={() => borrarTarea(index)}
          />
        );
      })}
    </div>
  );
};
