import "prompt-sync";
const prompt = require("prompt-sync")();

class Teste {
  private arrayTeste: String[] = [];

  public darPush(): void {
    const elemento: string = prompt("Digite uma palavra para incluir: ");
    this.arrayTeste.push(elemento);
  }
}

const estancia = new Teste();
estancia.darPush();
estancia.darPush();

console.log(estancia);
