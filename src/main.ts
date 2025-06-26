export class MainApp {
  private name: string = 'not set';

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
