"use strict";
// --------------------- String ---------------------  
var nome = 'joão'; //ts atribui um tipo automaticamente de acordo com o valor, caso n tenha colocado nenhum tipo
console.log(nome);
//nome = 1 // erro valor diferente
// --------------------- Numbers ---------------------  
var idade = 27;
// idade = "Ana" // erro valor diferente
console.log(idade);
// --------------------- Boolean ---------------------  
var possuiHobbies = false;
// possuiHobbies = 1 // erro valor diferente
console.log(possuiHobbies);
// --------------------- Tipos explícitos ---------------------  
var minhaIdade; // dessa maneira é inicializada com tipo "any" ficando dinâmico
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'valor';
console.log(typeof minhaIdade);
// --------------------- Array ---------------------  
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 'ola', 200, true];
//hobbies = 100
// --------------------- Tuplas - é um array com valores predefinidos que deve seguir uma ordem ---------------------  
var endereco = ["Av Principal", 99, "Bloco A"];
console.log(endereco);
endereco = ["Rua Importante", 100, "Bloco C"];
console.log(endereco);
// --------------------- Enums - é uma estrutura que você define valores pré definidos ---------------------  
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // 2
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
// --------------------- Any ---------------------  
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// --------------------- Funções ---------------------  
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 3));
// --------------------- Recebendo função ---------------------
var calculo;
// calculo = digaOi
// calculo()
// calculo = {}
calculo = multiplicar;
console.log(calculo(5, 6));
// --------------------- Objetos --------------------- 
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
// --------------------- Desafio --------------------- 
/*
Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número)
        e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horário (> 8)
*/
// let funcionário: {nome: string} = {   }
var funcionario1 = {
    // "=" Atribuindo valor ao obejto
    supervisores: ['Ana', 'Rafael'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do trabalho!';
        }
    }
};
console.log(funcionario1.supervisores);
console.log(funcionario1.baterPonto(8));
console.log(funcionario1.baterPonto(9));
// usando o código do desafio acima
var funcionario = {
    // "=" Atribuindo valor ao obejto
    supervisores: ['Ricardo', 'Guilherme'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do trabalho!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
