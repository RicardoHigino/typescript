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
// --------------------- Union Types --------------------- 
// Múltiplos tipos
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
// Checando tipos - código feito quando não se usa o typescript por exemplo
var valor = 30;
// esse código abaixo é um exemplo de verificações que o js precisa fazer sobre o type das variáveis
if (typeof valor == "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// O typescript já faz toda essa verificação automaticamente 
var valor2;
//valor2 = 'ricardo' // ele já faz a verificação dando erro no "valor2"
// --------------------- Never --------------------- 
// Quando queremos explicitar que a função vai terminar em algum erro ou vai ficar em algum tipo 
// de looping e nunca vai retornar a função. Para quando a função não termina corretamente.
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 80,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
// --------------------- Null --------------------- 
// Flag do typescript
// É mais útil para ter um valor opcional
var altura = 12;
// altura = null // para dar certo precisa ativar no tsconfig
// podemos usar o union types
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null; // fica como tipo "any" podendo assim alterar seu valor posteriormente
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
