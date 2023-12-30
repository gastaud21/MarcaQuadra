import "prompt-sync";
const prompt = require("prompt-sync")();
import { Contato } from "./Contato";

export abstract class Pessoa {
  //colocando abstract na classe Pessoa, n pode ser criado um obj dela, apenas ser extendida
  constructor(protected _nome: string, protected _contato: Contato[]) {}

  set mudaNome(novoNome: string) {
    novoNome = prompt("Qual o nome do funcionário? ");
    this._nome = novoNome.toUpperCase();
  }

  get nome(): string {
    return this._nome;
  }

  get contato(): Contato[] {
    return this._contato;
  }

  addContato(contato: Contato): void {
    this._contato.push(contato);
  }

  alteraDDD(index: number, novoDDD: number): void {}

  alteraCelular(index: number, novoDDD: number, novoCel: string): void {}

  removeAnyContato(): void {}
}
