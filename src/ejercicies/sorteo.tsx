//la '<T>' todavia no sabemos que es un generico que sirve para pasar un tipo de dato
class Sorteo<T> {
  private ticket?: T; // private es que no se puede acceder desde afuera, solo puede manejarse en la clase

  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    //public se puede acceder desde afuera

    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
}

const sorteo = new Sorteo<number>("Joaquin Lari");
sorteo.setTicket(7);
console.log(sorteo.sortear());
