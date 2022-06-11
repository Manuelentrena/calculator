const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
import {client} from './interfaces/complejas';
import {Persona} from './interfaces/classes';

const Alicia = new Persona("Alicia",23,100);

console.log(Alicia.comprar(22));

console.log(client.getFullAdress())
function App() {
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
    </div>
  );
}

export default App;
