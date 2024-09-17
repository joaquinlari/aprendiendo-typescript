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
