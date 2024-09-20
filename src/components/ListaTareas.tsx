type ListaTareas = {
  listaTareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => {
  return (
    <div className="task-list">
      {listaTareas.map((task, index) => {
        return <li key={index}>asd</li>;
      })}
    </div>
  );
};
