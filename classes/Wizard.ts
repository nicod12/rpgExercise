import { Character, Rol } from "./Character";

export class Wizard extends Character {
  protected skillPower: number;
  protected spell: string;
  protected magicShield: number;

  constructor(name: string, level: number, hp: number, skillPower: number, spell: string, magicShield: number) {
    super(name, Rol.Wizard);
    this.skillPower = skillPower;
    this.spell = spell;
    this.magicShield = magicShield;
  }


  public getSkillpower(): number {
    return this.skillPower;
  }

  public getSpell(): string {
    return this.spell;
  }

  public getMagicShield(): number {
    return this.magicShield;
  }

  public setSkillPower(skillPower: number): void {
    this.skillPower = skillPower
  }

  public setSpell(spell: string) {
    this.spell = spell;
  }

  public setMagicShield(magicShield: number) {
    this.magicShield = magicShield;
  }

  public attack(): void {
    console.log(`${this.name} lanza un hechizo: ${this.spell} causando ${this.skillPower} de daño.`);
  }

  public defend(): void {
    console.log(`${this.name} activa una barrera que absorbe ${this.magicShield}% de daño`);
  }

  public levelUp(): void {
    if (this.getLevel() === 10) {
      console.log("Ha alcanzado el nivel maximo!");

    } else {
      this.level++;
      this.hp += 5;
      this.skillPower += 3;
      this.magicShield += 1;
      console.log(`${this.name} ha subido al nivel ${this.level}!`);
    }

  }


}
