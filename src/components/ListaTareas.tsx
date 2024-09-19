type Props = {
  listaTareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: Props) => {
  return (
    <div className="task-list">
      {listaTareas.map((task, index) => {
        return <li key={index}>asd</li>;
      })}
    </div>
  );
};
