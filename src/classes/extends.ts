export class SuperHero {
  constructor(public name: string, public hability: string) {
    console.log("Llamando al constructor de SuperHero!");
  }

  protected getDescription(){
    return `${this.name} tiene como habilidad -${this.hability}`
  }
}

export class SinPower extends SuperHero {
  constructor(
    public name: string,
    public hability: string,
    public isMutant: Boolean
  ) {
    super(name, hability);
  }

  get myHability() {
    return this.hability;
  }
  
  set myHability(hability: string) {
    this.hability = hability;
  }

  public getDescriptionFull() {
    return super.getDescription();
  }
}

export const Batman: SinPower = new SinPower('Batman', 'paz', false);

/* export const Batman: SuperHero = new SuperHero("Batman", "Dinero"); */
