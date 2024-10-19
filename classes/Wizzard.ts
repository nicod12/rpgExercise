import { Character } from "./Character";

export class Wizzard extends Character {
  protected skillPower: number;
  protected spell: string;
  protected magicShield: number;

  constructor(name: string, level: number, hp: number, skillPower: number, spell: string, magicShield: number) {
    super(name);
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



}
