import { Wizzard } from "./classes/Wizzard";
import { handleDarkWizzardActions, tryEvolve } from "./utils/evolution";

const khadgar = new Wizzard("Khadgar", 1, 300, 150, "Bola de fuego", 30);

console.log(`${khadgar.getName()} es nivel ${khadgar.getLevel()}`);

khadgar.attack();
khadgar.defend();



let darkKhadgar = tryEvolve(khadgar);

if (darkKhadgar) {
  handleDarkWizzardActions(darkKhadgar);
} else {
  console.log(`${khadgar.getName()} aun no ha evolucionado.`);
}

for (let i = 1; i < 11; i++) {
  khadgar.levelUp();
}

khadgar.getLevel();


darkKhadgar = tryEvolve(khadgar);

if (darkKhadgar) {
  handleDarkWizzardActions(darkKhadgar);
} else {
  console.log(`${khadgar.getName()} aun no ha evolucionado.`);
}


