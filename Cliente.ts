import { Contato } from "./Contato";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
  constructor(protected _nome: string, protected _contato: Contato[]) {
    super(_nome, _contato);
  }

  set mudaNome(novoNome: string) {
    super.mudaNome;
  }

  get nome(): string {
    return super.nome;
  }

  get contato(): Contato[] {
    return super.contato;
  }

  addContato(contato: Contato): void {
    super.addContato(contato);
  }
}
