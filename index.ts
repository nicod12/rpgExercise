import { DarkWizzard } from "./classes/DarkWizzard";
import { Wizzard } from "./classes/Wizzard";


const khadgar = new Wizzard("Khadgar", 5, 50, "Bola de fuego", 5);

khadgar.attack();
khadgar.defend();

khadgar.setLevel(15);
console.log(`${khadgar.getName()} es nivel ${khadgar.getLevel()}`);

if (khadgar.getLevel() >= 10) {
  const darkKhadgar = new DarkWizzard(
    khadgar.getName(),
    khadgar.getLevel(),
    khadgar.getSkillpower() * 2,
    khadgar.getSpell(),
    khadgar.getMagicShield() * 2,
    25
  );

  darkKhadgar.setSpell("Sombras oscuras");

  if (darkKhadgar) {
    console.log(`${khadgar.getName()} evoluciono a un mago oscuro!`);
  }

  darkKhadgar.attack();
  darkKhadgar.defend();

}


