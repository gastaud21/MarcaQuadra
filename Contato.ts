import "prompt-sync";
const prompt = require("prompt-sync")();

export class Contato {
  constructor(
    protected _ddd: number,
    protected _celular: string,
    protected _email?: string
  ) {}

  get DDD(): number {
    return this._ddd;
  }

  set setDDD(codeArea: number) {
    codeArea = prompt("Digite o código de área do celular do Cliente: ");
    this._ddd = codeArea;
  }

  get celular(): string {
    return this._celular;
  }

  set setCelular(nCelular: string) {
    nCelular = prompt("Digite o celular do Cliente: ");
    this._celular = nCelular;
  }

  get email(): string {
    if (this._email) {
      return this._email;
    } else {
      return "";
    }
  }

  set setEmail(endereco: string) {
    endereco = prompt("Digite o E-mail do Cliente: ");
    this._email = endereco;
  }
}
