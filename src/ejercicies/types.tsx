type Programador = {
  nombre: string;
  tecnologias: string[];
  tomaMate: boolean;
};

const programador: Programador = {
  nombre: "Joaquín Lari",
  tecnologias: ["React", "CSS", "Angular"],
  tomaMate: true,
};
console.log(programador);

/* programador = {
  nombre: "Lari Joaquin",
  tecnologias: ["C#"],
  tomaMate: "SI",  esta linea estaria mal ya que al principio 'tomaMate' se definió como booleano solo.
}; */

type Programador2 = {
  nombre: string;
  tecnologias: string[];
  tomaMate: string;
};
const programador2: Programador2 = {
  nombre: "Lari Joaquin",
  tecnologias: ["C#"],
  tomaMate: "si",
};

console.log(programador2);
