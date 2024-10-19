import { Wizard } from "./classes/Wizard";
import { handleDarkWizardActions, tryEvolve } from "./utils/evolution";

const khadgar = new Wizard("Khadgar", 1, 300, 150, "Bola de fuego", 30);

console.log(`estadisticas del personaje: tipo:${khadgar.getType()} nombre:${khadgar.getName()}, nivel: ${khadgar.getLevel()}, vida: ${khadgar.getHp()}, habilidad: ${khadgar.getSpell()}, poder de habilidad: ${khadgar.getSkillpower()} `);

khadgar.attack();
khadgar.defend();



let darkKhadgar = tryEvolve(khadgar);

if (darkKhadgar) {
  handleDarkWizardActions(darkKhadgar);
} else {
  console.log(`${khadgar.getName()} aun no ha evolucionado.`);
}

for (let i = 1; i < 11; i++) {
  khadgar.levelUp();
}

khadgar.getLevel();


darkKhadgar = tryEvolve(khadgar);

if (darkKhadgar) {
  handleDarkWizardActions(darkKhadgar);
} else {
  console.log(`${khadgar.getName()} aun no ha evolucionado.`);
}


