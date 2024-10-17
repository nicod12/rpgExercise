import { Wizzard } from "./Wizzard";

export class DarkWizzard extends Wizzard {
  private darkPower: number;

  constructor(
    name: string,
    level: number,
    skillPower: number,
    spell: string,
    magicShield: number,
    darkPower: number
  ) {
    super(name, level, skillPower, spell, magicShield);
    this.darkPower = darkPower;
  }


  static evolveToDarkWizzard(wizzard: Wizzard): DarkWizzard | null {
    if (wizzard.getLevel() >= 10) {
      return new DarkWizzard(
        wizzard.getName(),
        wizzard.getLevel(),
        wizzard.getSkillpower() * 2,
        wizzard.getSpell(),
        wizzard.getMagicShield() * 2,
        25
      );
    }
    console.log(`${wizzard.getName()} no tiene suficiente nivel para evolucionar, se necesita ser nivel 10!.`);
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
