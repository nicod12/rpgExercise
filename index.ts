import { DarkWizzard } from "./classes/DarkWizzard";
import { Wizzard } from "./classes/Wizzard";

const khadgar = new Wizzard("Khadgar", 5, 300, 150, "Bola de fuego", 30);

khadgar.attack();
khadgar.defend();

khadgar.setLevel(5);
console.log(`${khadgar.getName()} es nivel ${khadgar.getLevel()}`);

const darkKhadgar = DarkWizzard.evolveToDarkWizzard(khadgar);

if (darkKhadgar) {
  console.log(`${khadgar.getName()} evolucionó a un mago oscuro!`);
  darkKhadgar.setSpell("Sombras oscuras");
  darkKhadgar.attack();
  darkKhadgar.defend();
}
