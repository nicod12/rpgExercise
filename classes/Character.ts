
export abstract class Character {

  protected name: string;
  protected level: number;
  protected hp: number;

  constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.hp = 250;
  }

  public getName(): string { return this.name; }
  public getLevel(): number { return this.level; }
  public getHp(): number { return this.hp; }

  public setName(name: string): void { this.name = name; }
  public setLevel(level: number): void { this.level = level; }
  public setHp(hp: number): void { this.hp = hp; }

  public abstract attack(): void;
  public abstract defend(): void;



}

