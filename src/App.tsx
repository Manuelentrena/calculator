const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
import { antman, Avenger } from "./classes/basica";
import {Batman, SuperHero} from './classes/extends';
import {magneto, wolverine, Mutante, Xmen} from './classes/abstract';

/* console.log(Avenger.getAvgAge()); */
/* Batman.myHability = "ganar"
console.log(Batman.myHability); */

const printName = (character: Xmen) => {
  console.log(character.salvarMundo());
};

printName(wolverine);
printName(magneto);

function App() {
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
    </div>
  );
}

export default App;
