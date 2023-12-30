import "prompt-sync";
const prompt = require("prompt-sync")();
import { Menu } from "./MenuDinamico";

let continua = true;

Menu.menuPrincipal();
while (continua) {
  const opcao: number = Number(prompt("Escolha uma ação: "));

  switch (opcao) {
    case 0:
      let retornoCliente = Menu.menuCliente();

      if (retornoCliente == 9) {
        continua = false;
      }
      break;
    case 1:
      let retornoFunc = Menu.menuFuncionario();
      if (retornoFunc == 9) {
        continua = false;
      }
      break;
    case 2:
      let retornoQuadra = Menu.menuQuadra();
      if (retornoQuadra == 9) {
        continua = false;
      }
      break;
    case 9:
      continua = false;
      break;
  }
}
