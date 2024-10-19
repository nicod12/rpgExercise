export enum Rol {
  Wizard = "Mago"
}

export abstract class Character {
  protected name: string;
  protected level: number;
  protected hp: number;
  protected type: Rol;

  constructor(name: string, type: Rol) {
    this.name = name;
    this.level = 1;
    this.hp = 250;
    this.type = type;
  }

  public getName(): string {
    return this.name;
  }

  public getLevel(): number {
    return this.level;
  }

  public getHp(): number {
    return this.hp;
  }

  public getType(): Rol {
    return this.type;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setLevel(level: number): void {
    this.level = level;
  }

  public setHp(hp: number): void {
    this.hp = hp;
  }

  public abstract attack(): void;
  public abstract defend(): void;
}
