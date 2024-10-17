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


  public darkAttack(): void {
    console.log(
      `${this.name} lanza un hechizo oscuro: ${this.spell} causando ${this.skillPower + this.darkPower} de daño.`
    );
  }


  public defend(): void {
    console.log(`${this.name} activa un escudo oscuro que absorbe ${this.magicShield * 1.2}% de daño.`);
  }
}
