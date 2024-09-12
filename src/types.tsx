//El tipo any no es buena practica ya que puede adquirir cualquier valor
let variable;

variable = "Hola mundo";
console.log(variable); //"Hola mundo", identifica como string

variable = 123;
console.log(variable); // 123, identifica como number

variable = true;
console.log(variable); // "true", identifica como boolean

//ARREGLOS
const arregloNumeros = [1, 2, 3, 4, 5];
console.log(arregloNumeros);
const arregloTexto = ["HTML", "CSS", "JAVASCRIPT"];
console.log(arregloTexto);

// arreglo1.push("REACT"); esto no funcionaría ya que ts detecta arreglo1 como tipo number

const arregloNumeros2: number[] = [1, 2, 3, 4, 5];
console.log(arregloNumeros2);

const arregloTexto1: string[] = ["HTML", "CSS", "JAVASCRIPT"];
arregloTexto1[0].indexOf("HTML");
console.log(arregloTexto1);

const programador = {
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

const programador2 = {
  nombre: "Lari Joaquin",
  tecnologias: ["C#"],
  tomaMate: "si",
};

console.log(programador2);
