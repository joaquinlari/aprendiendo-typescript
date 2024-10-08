class Peliculas {
  nombre?: string;
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`La pelicula es ${this.nombre}`);
  }

  //sirve para inicializar en caso de que no reciba ningun contenido
  constructor(nombre: string, protagonistas: string[], actores: string[]) {
    this.nombre = nombre;
    this.protagonistas = protagonistas;
    this.actores = actores;
  }
}

const pelicula = new Peliculas(
  "Attack on Titan",
  ["Eren Jaeger", "Mikasa Ackerman"],
  ["Yūki Kaji", "	Kiko Mizuhara"]
);

console.log(pelicula);
