import { Tarea } from "./Tarea";

type ListaTareas = {
  listaTareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => {
  return (
    <div className="task-list">
      {listaTareas.map((tarea, index) => {
        return (
          <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea} />
        );
      })}
    </div>
  );
};
