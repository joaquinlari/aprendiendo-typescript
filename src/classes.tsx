class Peliculas {
  nombre: string = "Attack On Titan";
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`La pelicula es ${this.nombre}`);
  }

  constructor(nombre: string, protagonistas: string[], actores: string[]) {
    this.nombre = nombre;
    this.protagonistas = protagonistas;
    this.actores = actores;
  }
}

const pelicula = new Peliculas();

pelicula.proyectarEnCine();
