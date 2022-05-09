export class Avenger {
  // private name: string = "Faydum";
  // public team: string = "Aicor";
  // public realName: string = "Manuel Entrena";
static avgAge: number = 35;
static getAvgAge(){
  return this.length;
}

  constructor(
    private name: string,
    private team: string,
    public realName: string,
  ) {}

  private bio() {
    return `${this.name} (${this.team})`
  }

  public hola() {
    return this.bio();
  }
}

export const antman: Avenger = new Avenger("AntMan", "Capitan", "Hombre Hormiga");
