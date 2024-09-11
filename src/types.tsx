//El tipo any no es buena practica ya que puede adquirir cualquier valor
let variable;

variable = "Hola mundo";
console.log(variable); //"Hola mundo", identifica como string

variable = 123;
console.log(variable); // 123, identifica como number

variable = true;
console.log(variable); // "true", identifica como boolean

//Arreglos
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = ["HTML", "CSS", "JAVASCRIPT"];

// arreglo1.push("REACT"); esto no funcionaría ya que ts detecta arreglo1 como tipo number

const arreglo3: number[] = [1, 2, 3, 4, 5];
const arreglo4: string[] = ["HTML", "CSS", "JAVASCRIPT"];
