//Variáveis
// texto
// númerico
// lógicas
// objetos

let a = "Um texto"
let b = 10
let c = false

const produto = {
    nome: "Lâmpada",
    preco: 10,
    categoria: "De casa"
}

// Operadores lógicos
// <
// >
// >=
// <=
// !==
// ===

c = 1 === 2

// Operadores aritméticos
// +
// -
// /
// *

b = (10 * 10) * 10

//Funções
function calculo(x) {
    return b + x
}

const texto = (y) => {
    return "Um texto: " + y + (calculo(1000))
}

//Estruturas de repetição
// for (let i = 0; i < 100; i++) {
//   console.log(i)
// }

// let d = 10

// while (d > 0) {
//   d--
//   console.log('d: ' + d)
// }

//Estruturas condicionais

// c = 20

// if (c === 10) {
//   console.log("Estrutura foi executada", c)
// } else if (c === 20) {
//   console.log("Estrutura foi executada 20", c)
// } else {
//   console.log("Estrutura foi executada falsa", c)
// }

//Arrays
let listaDeNomes = ['João', 'Maria', 'Ana', 'José']

console.log(listaDeNomes)
console.log('Tamanho: ', listaDeNomes.length)
console.log('Índice 2: ', listaDeNomes[2])

listaDeNomes.forEach(nome => {
    console.log(nome)
});

// console.log(texto("Esse é um texto passado como parâmetro "))