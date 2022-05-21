export class Apocalipsis {

  static instance: Apocalipsis;

  private constructor(public name: string){

  }

  static callApocalipsis(newName: string): Apocalipsis {
    if (!Apocalipsis.instance){
      Apocalipsis.instance = new Apocalipsis(newName);
    } 
    return Apocalipsis.instance;
  }
}

