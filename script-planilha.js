//instalar atraves do terminal
//utilizando o comando
// npm install readline-sync
//readline - biblioteca para armazenar valores por prompts
//INCLUDES/ PACKAGE/ IMPORTS
const prompt = require("readline-sync");
let data; // data do acadastro
let aEntrada = []; //LISTA PARA ARMAZENAR OS CADASTROS DE CREDITO/ENTRADA
let aSaida = []; //LISTA PARA ARMAZENAR OS CADASTROS DE DESPESA/SAÍDA
exePergunta();

//realizar Perguntas do MENU PRINCIPAL
function exePergunta() {
  console.log("O que você deseja Fazer? ");
  let mensagem = Number(
    prompt.question("1-Cadastrar/ 2 - Ver todos os cadastros/ 3-Sair")
  );

  switch (mensagem) {
    case 1:
      realizarCadastro();
      exePergunta();
      break;
    case 2:
      exibirCadastros(aEntrada, aSaida);
      exePergunta();
      break;
    case 3:
      console.log("Obrigado! Volte Sempre");
      break;
    default:
      exePergunta();
      break;
  }
}

//aCADASTRO DE CLIENTE
function realizarCadastro() {
  definirData();
  let tipo = Number(prompt.question("Qual eh o tipo? 1-Entrada/ 2 - Saida: "));
  if(tipo!== 1 && tipo!== 2){
    console.log("Ocorreu algum erro, repita a operação")
    return
  }
  let tipoRegistro = "";
  let descricao = prompt.question("Descricao: ");
  let valor = Number(
    prompt.question(
      "Qual eh o valor? (obs:Utilize o ponto, ao inves de virgula) "
    )
  );
  let dia = prompt.question("Qual o dia? "); //fazer por dropdown, ou selecionar no  calendario.
  let mes = prompt.question("Qual o mes? ");
  let ano = prompt.question("Qual o ano? ");
  let dtObj = `${dia}/${mes}/${ano}`;

  let aCadastro = [
    "Data de Cadastro: " + data,
    "Descrição: " + descricao,
    valor,
    "Data: " + dtObj,
    "Tipo de Operação: " + tipo,
  ];

  switch (tipo) {
    case 1:
      tipoRegistro = "Entrada/Crédito";
      aCadastro.push("Tipo de Registro: " + tipoRegistro);
      aEntrada.push(aCadastro);
      break;

    case 2:
      tipoRegistro = "Saída/Despesa";
      aCadastro.push(tipoRegistro);
      aSaida.push(aCadastro);
      break;

    default:
      console.log("Ocorreu algum erro, por favor, repita a operação");
      break;
  }

  return aEntrada, aSaida;
}

//EXIBIR OS CADASTROS EM TELA
function exibirCadastros(aEntrada, aSaida) {
  console.log("Cadastros de Entrada");
  console.log(aEntrada);
  console.log("Cadastros de Saída");
  console.log(aSaida);
  calcular(aEntrada, aSaida);
}

//AJUSTAR A DATA, MANIPULANDO DATAS
function definirData() {
  data = new Date();
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundos = data.getSeconds();
  let diaNome = data.getDay() + 1;

  //PARA ATRIBUIR O NOME DA SEMANA
  switch (diaNome) {
    case 1:
      diaNome = "Domingo";
      break;
    case 2:
      diaNome = "Segunda-feira";
      break;
    case 3:
      diaNome = "Terça-feira";
      break;
    case 4:
      diaNome = "Quarta-feira";
      break;
    case 5:
      diaNome = "Quinta-feira";
      break;
    case 6:
      diaNome = "Sexta-feira";
      break;
    case 7:
      diaNome = "Sábado";
      break;
    default:
      diaNome = "Esse dia não existe";
      break;
  }

  //PAA CORRIGIR A APRESENTAÇÃO DOS DADOS EM TELA
  //SE ALGUM DOS DADOS FOR MENOR QUE 10, SERA ACRESCIDO DO ZERO AO LADO ESQUERDO
  if (dia || mes || hora || minuto || segundos) {
    dia = `${dia < 10 ? "0" + dia : dia}`;
    mes = `${mes < 10 ? "0" + mes : mes}`;
    hora = `${hora < 10 ? "0" + hora : hora}`;
    minuto = `${minuto < 10 ? "0" + minuto : minuto}`;
    segundos = `${segundos < 10 ? "0" + segundos : segundos}`;
  }
  data = `${diaNome}, ${dia}/${mes}/${ano} , ${hora}:${minuto}:${segundos}`;
  return data;
}

//REALIZA O CALCULO DOS CADASTROS
function calcular(aEntrada, aSaida) {
  let somaDeEntrada = 0;
  let somaDeDespesa = 0;
  let element = 0;
  let total = 0;

  //PARA CADA ITEM DO ARRAY, IRA SOMAR O VALOR DE ENTRADA
  for (let index = 0; index < aEntrada.length; index++) {
    element = aEntrada[index][2]; // É O VALOR DENTRO DO CADASTRO DE ENTRADA
    somaDeEntrada = somaDeEntrada + element;
  }
    console.log("A soma de Entradas é: R$" + somaDeEntrada); //EXIIBE EM TELA  A SOMA DOS CREDITOS

  //PARA CADA ITEM DO ARRAY, IRA SOMAR O VALOR DE SAIDA
  for (let index = 0; index < aSaida.length; index++) {
    element = aSaida[index][2]; // É O VALOR DENTRO DO CADASTRO DE SAIDA
    somaDeDespesa = somaDeDespesa + element;
  }
  console.log("A soma de Despesa é: R$" + somaDeDespesa);//EXIIBE EM TELA  A SOMA DAS DESPESAS

  total = somaDeEntrada - somaDeDespesa; //REALIZA O CALCULO 
  console.log("O total é: R$"+total) //EXIBE EM TELA O CALCULO

  return somaDeEntrada, somaDeDespesa;
}
