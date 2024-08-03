//instalar atraves do terminal
//utilizando o comando
// npm install readline-sync
//readline - biblioteca para armazenar valores por prompts
//INCLUDES/ PACKAGE/ IMPORTS
const prompt = require("readline-sync");
let data; // data do cadastro
let aArrayCadastro = []; //LISTA PARA ARMAZENAR OS CADASTROS
exePergunta();

//var - variavel tipo global
//let - variavel tipo escopo
//const - variavel tipo escopo fechado
// string - conjunto de char
// number - numero qualquer
// int -  numero inteiro
// double - numero decimal
// decimal - numero decimal
// boolean - V ou F / TRUE OR FALSE /  T ou F /  .T.   .F.
// funcoes -  funcao é algo para fazer alguma coisa
//DECLARAÇÃO DE VARIAVEL
//FRACAMENTE TIPADA

//realizar Perguntas do MENU
function exePergunta() {
  console.log("O que Voce deseja Fazer? ");
  let mensagem = Number(
    prompt.question("1-Cadastrar/ 2 - Ver todos os cadastros/ 3-Sair")
  );

  switch (mensagem) {
    case 1:
      realizarCadastro();
      exePergunta();
      break;
    case 2:
      exibirCadastros(aArrayCadastro);
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

//CADASTRO DE CLIENTE
function realizarCadastro() {
  definirData();
  let nome = prompt.question("Qual eh o seu nome?");
  let sobrenome = prompt.question("Qual eh a seu sobrenome?");
  let idade = Number(prompt.question("Qual eh a sua idade?"));
  let diaNasc = prompt.question("Qual eh o dia do seu nascimento?");
  let mesNasc = prompt.question("Qual eh o mes do seu nascimento?");
  let anoNasc = prompt.question("Qual eh o ano do seu nascimento?");
  let dtnasc = new Date(`${anoNasc}/${mesNasc}/${diaNasc}`);

  dtnasc = `${diaNasc}/${mesNasc}/${anoNasc}`;
  const Cadastro = [
    "Data de Cadastro: " + data,
    nome,
    sobrenome,
    idade,
    dtnasc,
  ];

  aArrayCadastro.push(Cadastro);
  return aArrayCadastro;
}

function exibirCadastros(aArrayCadastro) {
  console.log(aArrayCadastro);
}

function definirData() {
  data = new Date();
  let meses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundos = data.getSeconds();
  let diaNome = data.getDay() + 1;

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
