"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let e const
{
    var seraQuePode = '?';
    console.log(seraQuePode);
    var estarFrio = true;
    if (estarFrio) {
        var acao = 'Colocar o casaco!';
        console.log(acao);
    }
    var cpf = '123.456.678-90';
    console.log(cpf);
}
// Função anônima pois a função não tem nome, é a variável que recebe uma função
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
// Função normal
function somar1(n1, n2) {
    return n1 + n2;
}
console.log(somar1(2, 2));
// Arrow function
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
// sem parâmetro
var saudacao = function () { return console.log("Olá!"); };
saudacao();
var falarCom = function (pessoa) { return console.log('Ola' + pessoa); };
falarCom('João');
// This
// function normalComThis() {
//     console.log(this)
// }
// normalComThis
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial() 
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComTHisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComTHisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
// Rest & Spread
// Spread = Espalha os valores
var numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var turmaB = __spreadArray(__spreadArray(['Fernando'], turmaA, true), ['Miguel', 'Ana'], false);
console.log(turmaB);
// Rest = Agrupa os valores
function retornarArray(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(a);
    return args;
}
var numeros = retornarArray('first', 1, 2, 3, 4, 5, 341, 1234);
console.log(numeros);
console.log(retornarArray.apply(void 0, __spreadArray(['second'], numbers, false)));
// Rest e Spread (Tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1 " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    // console.log(Array.isArray(params))
    console.log("2 " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
// Destructuring (array)
var caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor, ano);
var _a = [1, 2], w = _a[0], z = _a[1];
// Destructuring (array)
var item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        nomeCara: 'Importado',
        nomeTeste: 'Teste'
    }
};
var nomeItem = item.nome;
var precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
// Destructuring (object)
var n = item.nome, p = item.preco, _b = item.caracteristicas, nomeCara = _b.nomeCara, nomeTeste = _b.nomeTeste;
console.log(n);
console.log(p);
console.log(nomeCara);
console.log(nomeTeste);
// Template String
var usuarioID = 'Ricardo';
var notificacao = '9';
var boasVindas = "\nBoas vindas " + usuarioID + ",\nNotifica\u00E7\u00F5es: " + (parseInt(notificacao) > 9 ? '+9' : notificacao) + "\n";
console.log(boasVindas);
console.log("" + (1 + 1) * 30);
console.log("Mottor: " + caracteristicas[0]);
//# sourceMappingURL=ecmascript.js.map