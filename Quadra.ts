import "prompt-sync";
import { Horario } from "./Horario";
const prompt = require("prompt-sync")();

export class Quadra {
  constructor(
    protected _id: number,
    protected _materialPiso: string,
    protected _esportes: string[],
    protected _horarios: Horario[] = []
  ) {}

  get id(): number {
    return this._id;
  }

  get materialPiso(): string {
    return this._materialPiso;
  }

  get esportes(): string[] {
    return this._esportes;
  }

  set setEsportes(lista: string[]) {
    this._esportes = lista;
  }

  get Horarios(): Horario[] {
    return this._horarios;
  }

  set setHorarios(hora: Horario) {
    this._horarios.push(hora);
  }

  set arrayHorarios(arrayHr: Horario[]) {
    this._horarios = arrayHr;
  }
}
