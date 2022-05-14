export abstract class Mutante{
  constructor(
    public name: string,
    public realMane: string
  ){} 
}

export class Xmen extends Mutante{
  salvarMundo(){
    return 'Mundo salvado';
  }
}

export class Villano extends Mutante {
  salvarMundo() {
    return "Mundo conquistado";
  }
}

export const wolverine = new Xmen('Wolverine', 'Logan paul');
export const magneto = new Villano('Magneto', 'Magnus');


