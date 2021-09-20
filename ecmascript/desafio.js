"use strict";
// 1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
var dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
// 2 - Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nome) {
    if (nome === void 0) { nome = ''; }
    if (nome === '')
        nome = "Pessoa";
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// 3 - Dado esse array, imprima o menor valor!
var nums1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums1));
// 4 - Adicione os elementos de nums em array !
var nums = [-3, 33, 38, 5];
var array = [55, 20];
array.push.apply(array, nums);
console.log(array);
// 5 -  Simplifique os trechos de código abaixo utilizando o operador Destructuring!
var notas = [8.5, 6.3, 9.4];
var notas1 = notas[0], notas2 = notas[1], notas3 = notas[2];
console.log(notas1, notas2, notas3);
var cientista = { primeiroNome: "Will", experiencia: 12 };
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=desafio.js.map