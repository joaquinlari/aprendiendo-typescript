class Sorteo<T> {
  private numero?: T;

  constructor(private nombre: string) {}

  setNumero(numero: T) {
    this.numero = numero;
  }

  getNumero() {
    return this.numero;
  }

  public sortear(): string {
    return `Para ${this.numero}`;
  }
}
