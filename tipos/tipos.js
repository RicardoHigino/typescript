"use strict";
// string
var nome = 'joão'; //ts atribui um tipo automaticamente de acordo com o valor, caso n tenha colocado nenhum tipo
console.log(nome);
//nome = 1 // erro valor diferente
// numbers
var idade = 27;
// idade = "Ana" // erro valor diferente
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1 // erro valor diferente
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade; // dessa maneira é inicializada com tipo "any" ficando dinâmico
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'valor';
console.log(typeof minhaIdade);
// array
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 'ola', 200, true];
//hobbies = 100
// tuplas - é um array com valores predefinidos que deve seguir uma ordem
var endereco = ["Av Principal", 99, "Bloco A"];
console.log(endereco);
endereco = ["Rua Importante", 100, "Bloco C"];
console.log(endereco);
// enums - é uma estrutura que você define valores pré definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // 2
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
