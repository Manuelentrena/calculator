// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villano {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface City {
  (ciudadanos: string[]): number
}

let ciudadGotica: City;

ciudadGotica = ( ciudadanos ) => ciudadanos.length;

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

type Sexo = "M" | "V";
type EstadoCivil = "Casado" | "Soltero" | "Viudo";

interface Person {
  edad: number;
  estadoCivil: EstadoCivil;
  nombre: string;
  sexo: Sexo;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {

  public nombre: string = "Name Default";
  public edad: number = 23;
  public sexo: Sexo = "M";
  public estadoCivil: EstadoCivil = "Soltero";

  constructor(
    nombre: string,
    edad: number,
    sexo: Sexo,
    estadoCivil: EstadoCivil
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio() {
    const msg = "Funcion imprimirBio";
    console.log({ msg });
  }
}