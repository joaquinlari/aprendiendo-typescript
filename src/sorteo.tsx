class Sorteo<T> {
  private numero?: T; // private es que no se puede acceder desde afuera, solo puede manejarse en la clase

  constructor(private nombre: string) {}

  setNumero(numero: T) {
    this.numero = numero;
  }

  getNumero() {
    return this.numero;
  }

  public sortear(): string {
    //public se puede acceder desde afuera
    return `Para ${this.numero}`;
  }
}
