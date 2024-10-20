import { Wizard } from "./Wizard";

export class DarkWizard extends Wizard {
  private darkPower: number;

  private constructor(
    name: string,
    level: number,
    hp: number,
    skillPower: number,
    spell: string,
    magicShield: number,
    darkPower: number
  ) {
    super(name, level, hp, skillPower, spell, magicShield);
    this.darkPower = darkPower;
  }


  static evolveToDarkWizard(wizard: Wizard): DarkWizard | null {
    if (wizard.getLevel() >= 10) {
      return new DarkWizard(
        wizard.getName(),
        wizard.getLevel(),
        wizard.getHp() * 2,
        wizard.getSkillpower() * 2,
        wizard.getSpell(),
        wizard.getMagicShield(),
        25
      );
    }

    return null;
  }

  public darkAttack(): void {
    console.log(
      `${this.name} lanza un hechizo ${this.spell} causando ${this.skillPower + this.darkPower} de daño.`
    );
  }


  public defend(): void {
    console.log(`${this.name} activa una barrera que absorbe ${this.magicShield * 1.2}% de daño.`);
  }
}
