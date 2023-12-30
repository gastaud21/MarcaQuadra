import "prompt-sync";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
const prompt = require("prompt-sync")();

export class Horario {
  constructor(
    private _hora: number,
    private _cliente: Cliente,
    private _funcionario: Funcionario
  ) {}

  get hora(): number {
    return this._hora;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  get funcionario(): Funcionario {
    return this._funcionario;
  }
}
