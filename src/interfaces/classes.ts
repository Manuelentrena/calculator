
interface Cliente {
  name: string;
  producto: number;
  dinero: number;
  comprar(id: number): boolean;
}

export class Persona implements Cliente {

  public name = "Manuel";
  public producto = 23;
  public dinero = 100;

  constructor(name: string, producto: number, dinero: number) {
    this.name = name;
    this.producto = producto;
    this.dinero = dinero;
  }

  comprar(id: number) {
    if(id === this.producto){
      return true;
    }else{
      return false;
    } 
  }
}