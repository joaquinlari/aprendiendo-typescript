class Peliculas {
  nombre: string = "Attack On Titan";
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`La pelicula es ${this.nombre}`);
  }
}

const pelicula = new Peliculas();

pelicula.proyectarEnCine();
