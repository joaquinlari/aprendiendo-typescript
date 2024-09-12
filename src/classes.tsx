class Peliculas {
  nombre?: string;
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`La pelicula es ${this.nombre}`);
  }
}
