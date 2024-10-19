import { DarkWizard } from "../classes/DarkWizard";
import { Wizard } from "../classes/Wizard";

export function tryEvolve(wizard: Wizard): DarkWizard | null {

  if (wizard.getLevel() === 10) {
    let darkWizard = DarkWizard.evolveToDarkWizard(wizard);
    console.log(`${wizard.getName()} ha evolucionado a un mago oscuro!`);
    return darkWizard;
  } else {
    console.log(`Se requiere nivel 10 para evolucionar`);
    return null;
  }
}

export function handleDarkWizardActions(darkWizard: DarkWizard): void {
  darkWizard.setSpell("Sombras oscuras");
  darkWizard.darkAttack();
  darkWizard.defend();
}
