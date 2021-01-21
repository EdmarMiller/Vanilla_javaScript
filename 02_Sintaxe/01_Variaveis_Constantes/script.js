// Comentando em uma linha

/*
Comentando em
mais de uma linha 
*/ 

/*
  Temos e tipos de variavel
  Var: não respeita escopo
  let: respeita escopo 
*/

// const: respeita escopo, seu valor tem que ser atribuido na declaração.

// pesqueisar sobre para reservadas do JS

// Para decraramos nomo de variavel, por convenção utilizamos camelCase
// nomeComposto tempoTotal 

const cl = console.log;

const nome5 = 'Edmar'; // Constante nome = recebe valor Edmar que é uma string (texto)

cl(typeof(nome5));
cl((nome5.length));

let nome1 = "Edmar2"

cl(nome1);

let nome2; // declarando variavel
cl(nome2); // undefined 

nome2 = "Miller"; // Atribuindo valor a variavel
cl(nome2);


let nome = prompt("Qual seu nome?");
cl(nome);
let sobrenome = prompt("Qual seu Sobrenome?");
cl(sobrenome);

let nomeCompleto = cl(`Meu nome completo é ${nome} ${sobrenome}`)


let nomeCompleto2 = alert("Meu nome completo é " + nome + " " + sobrenome )

