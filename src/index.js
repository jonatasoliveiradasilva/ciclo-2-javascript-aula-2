// desafio 1

// você foi chamado para ajudar a pintar uma parede em uma casa.
// a parede tem formato retangular e você precisa saber quantos metros quadrados de tinta serão necessários para cobri-la.
// Para isso, você deve calcular a área da parede.
// a parede tem 4 metros de altura e 5 metros de largura.

// para calcular a área de um retângulo usamos a seguinte fórmula:

// area = largura * altura;

// dimensões da parede (largura e altura em metros)

var altura = 4;
var largura = 5;

// calculando a área da parede

var area = altura * largura;

// exibindo o resultado no console
console.log(`A área da parede é ${area}`);

// -------------------------------------------------------------------------------------------------



// desafio 2

// imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// você precisa juntar essas duas informações para formar o nome completo do
// usuário e exibir uma mensagem de boas-vindas.

// nome e sobrenome inseridos pelo usuário

var nome = "João";
var sobrenome = "Silva";

// juntando (concatenando) os nomes com a mensagem de boas-vindas
  
var nomeCompleto = (`Seja bem-vindo ${nome} ${sobrenome}`);

// exibindo a mensagem no console
console.log(nomeCompleto);

// -------------------------------------------------------------------------------------------------



// desafio 3

// você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// o funcionário informa sua idade em anos, e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// idade do funcionário em anos
var idadeEmAnos = 30;

// calculando anos em dias

var dias = idadeEmAnos * 365;

// exibindo o resultado no console
console.log(`O funcionário viveu aproximadamente ${dias} dias de vida`);

//-------------------------------------------------------------------------------------------------



// desafio 4

// você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
// se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.

// duração total do evento em minutos
var duracaoEmMinutos = 135;

// calculando horas e minutos

var horas = Math.floor(duracaoEmMinutos / 60);
var minutos = duracaoEmMinutos % 60;

// exibindo o resultado no console
console.log(`O evento durou ${horas} horas e ${minutos} minutos`);
