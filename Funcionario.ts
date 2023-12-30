import "prompt-sync";
import { Contato } from "./Contato";
import { Pessoa } from "./Pessoa";
const prompt = require("prompt-sync")();

export class Funcionario extends Pessoa {
  constructor(
    protected _nome: string,
    protected _contato: Contato[],
    protected _cargo: string
  ) {
    super(_nome, _contato);
  }

  set nome(novoNome: string) {
    super.nome;
  }

  get nome(): string {
    return super.nome;
  }

  get cargo(): string {
    return this._cargo;
  }

  set setCargo(novoCargo: string) {
    this._cargo = novoCargo;
  }

  get contato(): Contato[] {
    return super.contato;
  }

  addContato(contato: Contato): void {
    super.addContato(contato);
  }
}
