import "prompt-sync";
import { Contato } from "./Contato";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { Quadra } from "./Quadra";
import { Horario } from "./Horario";
const prompt = require("prompt-sync")();

let listaCliente: Cliente[] = [];
let listaFuncionario: Funcionario[] = [];
let listaQuadra: Quadra[] = [];

export abstract class Menu {
  public static menuPrincipal(): void {
    console.log("\n========= MENU PRINCIPAL =========");
    console.log("| 0. Cliente                     |");
    console.log("| 1. Funcionário                 |");
    console.log("| 2. Quadra                      |");
    console.log("| 9. Sair                        |");
    console.log("| ============================== |");
  }

  public static menuCliente(): any {
    let continuaCliente = true;

    while (continuaCliente) {
      console.log("\n========= MENU -> CLIENTE =========");
      console.log("| 0. Cadastrar Cliente            |");
      console.log("| 1. Listar Clientes              |");
      console.log("| 2. Alterar contato de Cliente   |");
      console.log("| 8. Voltar ao Menu Principal     |");
      console.log("| 9. Sair                         |");
      console.log("| =============================== |");

      let opcaoCliente: number = Number(
        prompt("Escolha uma ação do Menu -> CLIENTE: ")
      );

      switch (opcaoCliente) {
        case 0:
          const nome = prompt("Qual o nome do Cliente? ").toUpperCase();
          const dddCelular = Number(prompt("Qual o DDD do N° celular dele? "));
          const nCelular = prompt("Qual o N° de celular dele? ");
          const possuiEmail = prompt(
            "Adicionar um email a ele? S/N: "
          ).toUpperCase();
          let contatosCliente: Contato[] = [];
          let contWemail: Contato;
          if (possuiEmail == "S") {
            let email = prompt("Qual o E-mail dele? ");
            contWemail = new Contato(dddCelular, nCelular, email);
            contatosCliente.push(contWemail);
          } else {
            contWemail = new Contato(dddCelular, nCelular);
            contatosCliente.push(contWemail);
          }
          let addCont = true;
          while (addCont) {
            const querAdd = prompt(
              "Quer adicionar outro telefone? S/N : "
            ).toUpperCase();
            if (querAdd == "S") {
              const dddCliente = Number(
                prompt("Qual o ddd do outro telefone? ")
              );
              const celCliente = prompt("Qual o número do outro telefone? ");
              let novoCont = new Contato(dddCliente, celCliente);
              contatosCliente.push(novoCont);
            } else if (querAdd == "N") {
              addCont = false;
            } else {
              console.log("Digitou ação errada. Repita a operação.");
              addCont = false;
            }
          }

          const novoCliente = new Cliente(nome, contatosCliente);

          listaCliente.push(novoCliente);

          break;
        case 1:
          listaCliente.forEach((client) => {
            console.log(`\nCLIENTE: ${client.nome}`);
            console.log(
              `Contatos: ${client.contato.length} contato(s) ${
                client.contato[0].email != "" ? "e 1 E-mail" : ""
              }`
            );
            client.contato.forEach((contato) => {
              if (contato.email != "") {
                console.log(`E-mail: ${contato.email}`);
              }
              console.log(`Telefone: (${contato.DDD}) ${contato.celular}`);
            });
          });
          break;
        case 2:
          const clientToSet = prompt(
            "Digite o nome exato do funcionário que deseja alterar algum de seus contatos: "
          ).toUpperCase();
          const findTheClient = listaCliente.filter(
            (client) => client.nome == clientToSet
          );
          if (findTheClient.length == 0) {
            console.log("Funcionário não encontrato, repita a operação.");
            break;
          }
          console.log(`\nCLIENTE: ${findTheClient[0].nome}`);
          console.log("Oque deseja fazer? Digite o número referente a ação:");
          console.log("-".repeat(70));
          console.log("[0] Adicionar um contato");
          console.log("[1] Alterar um número específico");
          console.log("[2] Excluir um contato em específico");
          console.log("[8] Voltar ao menu FUNCIONÁRIO \n");
          const acaoClient = Number(
            prompt("Digite o número referente a ação: ")
          );

          switch (acaoClient) {
            case 0:
              const novoDDD = Number(prompt("Digite o DDD do novo telefone: "));
              const novoCel = prompt("Digite o Número do novo telefone: ");
              const newContato: Contato = new Contato(novoDDD, novoCel);
              findTheClient[0].addContato(newContato);
              break;
            case 1:
              break;
            case 2:
              break;
            default:
              break;
          }

          break;
        case 8:
          continuaCliente = false;
          this.menuPrincipal();
          break;
        case 9:
          continuaCliente = false;
          return 9;
      }
    }
  }

  public static menuFuncionario(): any {
    let continuaFunc = true;

    while (continuaFunc) {
      console.log("\n========== MENU -> FUNCIONÁRIO ==========");
      console.log("| 0. Cadastrar Funcionário              |");
      console.log("| 1. Listar Funcionários                |");
      console.log("| 2. Alterar Cargo de Funcionário       |");
      console.log("| 3. Alterar Contato de Funcionário     |");
      console.log("| 8. Voltar ao Menu Principal           |");
      console.log("| 9. Sair                               |");
      console.log("| ===================================== |");

      let opcaoFunc: number = Number(
        prompt("Escolha uma ação do Menu -> FUNCIONÁRIO: ")
      );

      switch (opcaoFunc) {
        case 0:
          const nome = prompt("Qual o nome do Funcionário? ").toUpperCase();
          const cargo = prompt("Qual o cargo do Funcionário? ");
          const dddCelular = Number(prompt("Qual o DDD do N° celular dele? "));
          const nCelular = prompt("Qual o N° de celular dele? ");
          const possuiEmail = prompt(
            "Adicionar um email a ele? S/N: "
          ).toUpperCase();
          let arrayContFuncion: Contato[] = [];
          let contatoFuncionario: Contato;
          if (possuiEmail == "S") {
            let email = prompt("Qual o E-mail dele? ");
            contatoFuncionario = new Contato(dddCelular, nCelular, email);
            arrayContFuncion.push(contatoFuncionario);
          } else {
            contatoFuncionario = new Contato(dddCelular, nCelular);
            arrayContFuncion.push(contatoFuncionario);
          }
          let addCont = true;
          while (addCont) {
            const querAdd = prompt(
              "Quer adicionar outro telefone? S/N: "
            ).toUpperCase();
            if (querAdd == "S") {
              const dddFuncion = Number(
                prompt("Qual o DDD do outro telefone? ")
              );
              const celFuncion = prompt("Qual o número do outro telefone? ");
              let novoCont = new Contato(dddFuncion, celFuncion);
              arrayContFuncion.push(novoCont);
            } else if (querAdd == "N") {
              addCont = false;
            } else {
              console.log("Digitou ação errada. Repita a operação.");
              addCont = false;
            }
          }
          const novoFuncionario = new Funcionario(
            nome,
            arrayContFuncion,
            cargo
          );
          listaFuncionario.push(novoFuncionario);

          break;
        case 1:
          listaFuncionario.forEach((funcionario) => {
            console.log(`\nNome do FUNCIONÁRIO: ${funcionario.nome}`);
            console.log(`Cargo: ${funcionario.cargo}`);
            console.log(
              `Contatos: ${funcionario.contato.length} contato(s) ${
                funcionario.contato[0].email != "" ? "e 1 E-mail" : ""
              }`
            );
            funcionario.contato.forEach((contato) => {
              if (contato.email != "") {
                console.log(`E-mail: ${contato.email}`);
              }
              console.log(`Telefone: (${contato.DDD}) ${contato.celular}`);
            });
          });
          break;
        case 2:
          const proletario = prompt(
            "Digite o nome exato do funcionário que deseja alterar cargo: "
          ).toUpperCase();
          const proletFind = listaFuncionario.filter(
            (peao) => peao.nome == proletario
          );
          if (proletFind.length == 0) {
            console.log("Funcionário não encontrado, repita a operação");
            break;
          }
          const novoCargo = prompt(
            "Digite o nome do novo CARGO do funcionário: "
          );
          proletFind[0].setCargo = novoCargo;
          break;
        case 3:
          const peaoToSet = prompt(
            "Digite o nome exato do funcionário que deseja alterar algum de seus contatos: "
          ).toUpperCase();
          const findThePeao = listaFuncionario.filter(
            (peao) => peao.nome == peaoToSet
          );
          if (findThePeao.length == 0) {
            console.log("Funcionário não encontrato, repita a operação.");
            break;
          }
          console.log(`\nFUNCIONÁRIO: ${findThePeao[0].nome}`);
          console.log("Oque deseja fazer? Digite o número referente a ação:");
          console.log("-".repeat(70));
          console.log("[0] Adicionar um contato");
          console.log("[1] Alterar um número específico");
          console.log("[2] Excluir um contato em específico");
          console.log("[8] Voltar ao menu FUNCIONÁRIO \n");
          const acaoFunc = Number(prompt("Digite o número referente a ação: "));
          console.log(acaoFunc);

          switch (acaoFunc) {
            case 0:
              const novoDDD = Number(prompt("Digite o DDD do novo telefone: "));
              const novoCel = prompt("Digite o Número do novo telefone: ");
              const newContato: Contato = new Contato(novoDDD, novoCel);
              findThePeao[0].addContato(newContato);
              break;
            case 1:
              break;
            case 2:
              break;
            case 8:
              break;
            default:
              console.log(
                "Você digitou um número inválido de ação. Repita a operação."
              );

              break;
          }

          break;
        case 8:
          continuaFunc = false;
          this.menuPrincipal();
          break;
        case 9:
          continuaFunc = false;
          return 9;
      }
    }
  }

  public static menuQuadra(): any {
    let continuaQuadra = true;

    while (continuaQuadra) {
      console.log("=================== MENU -> QUADRA ===================");
      console.log("| 0. Cadastrar Quadra                                |");
      console.log("| 1. Visualizar Quadras cadastradas                  |");
      console.log("| 2. Visualizar Esportes praticáveis da Quadra       |");
      console.log("| 3. Adicionar mais esportes para uma Quadra         |");
      console.log("| 4. Mudar todos Esportes praticáveis da Quadra      |");
      console.log("| 5. Locar Horário para um cliente                   |");
      console.log("| 6. Listar Horários da Quadra                       |");
      console.log("| 7. Deletar Horários da Quadra                      |");
      console.log("| 8. Voltar ao Menu Principal                        |");
      console.log("| 9. Sair                                            |");
      console.log("| ================================================== |");

      let opcaoQuadra: number = Number(
        prompt("Escolha uma ação do Menu -> QUADRA: ")
      );

      switch (opcaoQuadra) {
        case 0:
          const id = Number(prompt("Qual o ID/Numero da quadra? "));
          const material = prompt("Qual o material do piso da quadra? ");
          let listaEsportes = [];
          let addEsp = true;
          while (addEsp) {
            const esporte = prompt("Qual o esporte praticado na quadra? ");
            listaEsportes.push(esporte);
            const addEsporte = prompt(
              "Deseja adicionar mais outro esporte? S/N: "
            ).toUpperCase();
            if (addEsporte == "N") {
              addEsp = false;
            }
          }
          const novaQuadra = new Quadra(id, material, listaEsportes);
          listaQuadra.push(novaQuadra);
          console.log(listaQuadra);

          break;
        case 1:
          listaQuadra.forEach((element) => {
            console.log("-".repeat(75));
            console.log(`Quadra: ${element.id}`);
            console.log(`Material do Piso: ${element.materialPiso}`);
            console.log(`Esportes: ${element.esportes.toString()} `);
            console.log(`Horários já marcados:`);
            element.Horarios.forEach((i) => {
              console.log(
                `${i.hora} horas marcado para CLIENTE: ${i.cliente.nome} por FUNCIONARIO ${i.funcionario.nome}`
              );
            });
            console.log("-".repeat(75));
          });
          break;
        case 2:
          if (listaQuadra.length != 0) {
            const idBusca = Number(
              prompt(
                "Digite o id da quadra que quer ver os esportes praticáveis: "
              )
            );
            const resultBuscaQuadra = listaQuadra.filter(
              (numero) => numero.id == idBusca
            );
            console.log(
              `\nEsportes da Quadra ${
                resultBuscaQuadra[0].id
              } : ${resultBuscaQuadra[0].esportes.toString()}\n`
            );
            break;
          } else {
            console.log(
              "Você precisa cadastrar uma quadra antes de mudar o esporte dela."
            );
            break;
          }
          break;
        case 3:
          const idBusca = prompt(
            "Digite o id da quadra que quer adicionar mais esportes praticáveis: "
          );
          const buscarQuadra = listaQuadra.filter((num) => num.id == idBusca);
          if (buscarQuadra.length == 0) {
            console.log("Id não encontrado, por favor, refaça a operação.");
            break;
          }
          const addSport = prompt(
            `Qual esporte deseja adicionar a Quadra ${buscarQuadra[0].id} ? `
          );
          const oldSports = buscarQuadra[0].esportes;
          oldSports.push(addSport);
          buscarQuadra[0].setEsportes = oldSports;

          break;
        case 4:
          const idToSetSport = Number(
            prompt(
              "Digite o id da quadra que queira mudar os esportes praticáveis: "
            )
          );
          const buscaQuad = listaQuadra.filter((num) => num.id == idToSetSport);

          const listaNovosEsportes: string[] = [];

          let addNewSpor = true;
          while (addNewSpor) {
            const esporte = prompt("Qual o esporte praticado na quadra? ");
            listaNovosEsportes.push(esporte);
            const addEsporte = prompt(
              "Deseja adicionar mais outro esporte? S/N: "
            ).toUpperCase();
            if (addEsporte == "N") {
              addNewSpor = false;
            }
          }
          // buscaQuad[0].setEsportes(listaNovosEsportes);
          buscaQuad[0].setEsportes = listaNovosEsportes;

          break;
        case 5:
          if (listaQuadra.length == 0) {
            console.log(
              "Cadastre uma quadra antes de tentar locar para alguém!"
            );
            break;
          }
          if (listaCliente.length == 0) {
            console.log(
              "Cadastre o cliente antes de locar a quadra para ele!!"
            );
            break;
          }
          if (listaFuncionario.length == 0) {
            console.log(
              "Cadastre o funcionário que irá realizar a marcação da quadra antes de locá-la para alguém!"
            );
            break;
          }
          console.log(listaQuadra);
          const idQuadraResrv = Number(
            prompt("Digite o id da quadra que seja locar para alguém: ")
          );
          const idHrFind = listaQuadra.filter(
            (quadra) => quadra.id == idQuadraResrv
          );
          if (idHrFind.length == 0) {
            console.log("Id de quadra não encontrado, repita a operação.");
            break;
          }
          const clienteHR = prompt(
            "Qual o nome exato do CLIENTE a ser marcado? "
          ).toUpperCase();
          const clienteHrFind = listaCliente.filter(
            (cliente) => cliente.nome == clienteHR
          );
          if (clienteHrFind.length == 0) {
            console.log("Cliente não encontrado, repita a operação.");
            break;
          }
          const funcionarioHR = prompt(
            "Qual o nome exato do FUNCIONÁRIO que está realizando a marcação? "
          ).toUpperCase();
          const funcionarioHrFind = listaFuncionario.filter(
            (funcionario) => funcionario.nome == funcionarioHR
          );
          if (funcionarioHrFind.length == 0) {
            console.log("Funcionário não encontrado, repita a operação.");
            break;
          }
          const hora = Number(
            prompt("Qual hora deseja locar? *Apenas número, formato 24h: ")
          );

          const novaHora = new Horario(
            hora,
            clienteHrFind[0],
            funcionarioHrFind[0]
          );
          idHrFind[0].setHorarios = novaHora;
          console.log("Hora marcada com sucesso.");
          break;
        case 6:
          const idQuadraB = Number(
            prompt("Digite o id da Quadra que deseja ver seus horários: ")
          );
          const findQuadra = listaQuadra.filter(
            (quadra) => quadra.id == idQuadraB
          );
          if (findQuadra.length == 0) {
            console.log(`\nQuadra de ID ${idQuadraB} não cadastrada.`);
            console.log("Por favor, refaça a operação.\n");
            break;
          }
          if (findQuadra[0].Horarios.length == 0) {
            console.log(
              `\nNenhum horário cadastrado para a Quadra ${idQuadraB}\n`
            );
            break;
          }
          console.log("-".repeat(75));
          console.log(`Quadra: ${findQuadra[0].id}`);
          console.log(`Horários já marcados:`);
          findQuadra[0].Horarios.forEach((i) => {
            console.log(
              `${i.hora} horas marcado para CLIENTE: ${i.cliente.nome} por FUNCIONARIO ${i.funcionario.nome}`
            );
          });
          console.log("-".repeat(75) + "\n");
          break;
        case 7:
          const idQuadraC = Number(
            prompt("Digite o id da Quadra que deseja ver seus horários: ")
          );
          const findQuadraC = listaQuadra.filter(
            (quadra) => quadra.id == idQuadraC
          );
          if (findQuadraC.length == 0) {
            console.log(`\nQuadra de ID ${idQuadraC} não cadastrada.`);
            console.log("Por favor, refaça a operação.\n");
            break;
          } else if (findQuadraC[0].Horarios.length == 0) {
            console.log(
              `\nQuadra ${findQuadraC[0].id} não possui nenhum horário marcado.`
            );
            console.log("Marque um horário antes para deletá-lo.\n");
            break;
          }
          const horaDelete = Number(
            prompt(`Qual hora deseja deletar da Quadra ${findQuadraC[0].id}? `)
          );
          const arrayHr = findQuadraC[0].Horarios.filter(
            (horario) => horario.hora == horaDelete
          );
          if (arrayHr.length == 0) {
            console.log(
              `\nHorário das ${horaDelete} horas não foi encontrado como marcado na Quadra ${findQuadraC[0].id}\n`
            );
            break;
          }
          const indexHr = findQuadraC[0].Horarios.indexOf(arrayHr[0]);
          console.log(indexHr);
          const oldHours = findQuadraC[0].Horarios;
          oldHours.splice(indexHr, 1);
          console.log(oldHours);
          findQuadraC[0].arrayHorarios = oldHours;
          break;
        case 8:
          continuaQuadra = false;
          this.menuPrincipal();
          break;
        case 9:
          continuaQuadra = false;
          return 9;
      }
    }
  }
}
