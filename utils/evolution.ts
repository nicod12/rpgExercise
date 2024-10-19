import { DarkWizzard } from "../classes/DarkWizzard";
import { Wizzard } from "../classes/Wizzard";

export function tryEvolve(wizzard: Wizzard): DarkWizzard | null {

  if (wizzard.getLevel() === 10) {
    let darkWizzard = DarkWizzard.evolveToDarkWizzard(wizzard);
    console.log(`${wizzard.getName()} ha evolucionado a un mago oscuro!`);
    return darkWizzard;
  } else {
    console.log(`Se requiere nivel 10 para evolucionar`);
    return null;
  }
}

export function handleDarkWizzardActions(darkWizzard: DarkWizzard): void {
  darkWizzard.setSpell("Sombras oscuras");
  darkWizzard.attack();
  darkWizzard.defend();
}
