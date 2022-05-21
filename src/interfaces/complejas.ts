interface Client {
  name: string,
  age?: number,
  address: Address,
  getFullAdress():string,
}

type typeStreet = "AVD" | "CLL" | "PLZ";

interface Address {
  id: number;
  zip: string;
  city: string;
  street: string;
  type: typeStreet;
  num: number;
}

export const client: Client = {
  name: "Manuel",
  age: 34,
  address: {
    id: 125,
    zip: "COR ESP",
    city: "Montilla",
    street: "marquez de la vega de armijo",
    type: "AVD",
    num: 20,
  },
  getFullAdress() {
    return `Calle: ${this.address.type} ${this.address.street} , num ${this.address.num}, ${this.address.zip} (${this.address.city})`;
  },
};

