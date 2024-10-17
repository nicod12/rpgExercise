
export abstract class Character {

  protected name: string;
  protected level: number;

  constructor(name: string) {
    this.name = name;
    this.level = 1;
  }

  public getName(): string { return this.name; }
  public getLevel(): number { return this.level; }

  public setName(name: string): void { this.name = name; }
  public setLevel(level: number): void { this.level = level; }

  public abstract attack(): void;
  public abstract defend(): void;


}

