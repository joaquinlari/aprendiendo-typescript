class Sorteo<T> {
  private numero?: T;

  constructor(nombre: string) {}

  setNumero(numero: T) {
    this.numero = numero;
  }

  getNumero() {
    return this.numero;
  }
}
