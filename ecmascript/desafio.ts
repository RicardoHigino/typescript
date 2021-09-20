// 1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro: (valor: number) => number = function(valor) {
    return valor * 2
    }

    console.log(dobro(10))

// 2 - Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nome: string = '') {
    if (nome === '') nome = "Pessoa";
    console.log("Ola, " + nome)
    }
    dizerOla()
    dizerOla("Anna")
    
// 3 - Dado esse array, imprima o menor valor!
const nums1: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums1))

// 4 - Adicione os elementos de nums em array !
const nums = [-3, 33, 38, 5]
const array = [55, 20]
array.push(...nums)
console.log(array)

// 5 -  Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4]
const [notas1, notas2, notas3 ] = notas
console.log(notas1, notas2, notas3)


var cientista = {primeiroNome: "Will", experiencia: 12}
var {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)