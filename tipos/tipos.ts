// --------------------- String ---------------------  
let nome = 'joão' //ts atribui um tipo automaticamente de acordo com o valor, caso n tenha colocado nenhum tipo
console.log(nome)
//nome = 1 // erro valor diferente

// --------------------- Numbers ---------------------  
let idade: number = 27
// idade = "Ana" // erro valor diferente
console.log(idade)

// --------------------- Boolean ---------------------  
let possuiHobbies: boolean = false
// possuiHobbies = 1 // erro valor diferente
console.log(possuiHobbies)

// --------------------- Tipos explícitos ---------------------  
let minhaIdade // dessa maneira é inicializada com tipo "any" ficando dinâmico
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'valor'
console.log(typeof minhaIdade)

// --------------------- Array ---------------------  
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 'ola', 200, true]
//hobbies = 100

// --------------------- Tuplas - é um array com valores predefinidos que deve seguir uma ordem ---------------------  
let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]
console.log(endereco)

endereco = ["Rua Importante", 100, "Bloco C"]
console.log(endereco)

// --------------------- Enums - é uma estrutura que você define valores pré definidos ---------------------  
enum Cor {
    Cinza, // 0
    Verde = 100, // 100 pode setar um valor mas o próximo irá continuar este ex: 101
    Azul // 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// --------------------- Any ---------------------  
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// --------------------- Funções ---------------------  
function retornaMeuNome(): string {
    //return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void { // void é igual vazio, deixa explicito que esta função não retorna nada
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2, 3))

// --------------------- Recebendo função ---------------------
let calculo: (X: number, Y: number) => number
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar
console.log(calculo(5, 6))

// --------------------- Objetos --------------------- 
let usuario: { nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

usuario = {
    idade: 31,
    nome: 'Maria',
}
console.log(usuario)

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

let funcionario1: { // atribuindo o tipo da variável(objeto) e seus tipos internos(array e função)
    supervisores: string[],
    baterPonto: (horas: number) => string
} = { 
    // "=" Atribuindo valor ao obejto
    supervisores: ['Ana', 'Rafael'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do trabalho!'
        }
    }
}

console.log(funcionario1.supervisores)
console.log(funcionario1.baterPonto(8))
console.log(funcionario1.baterPonto(9))

// --------------------- Tipos personalizados --------------------- 

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

// usando o código do desafio acima
let funcionario: Funcionario = { 
    // "=" Atribuindo valor ao obejto
    supervisores: ['Ricardo', 'Guilherme'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do trabalho!'
        }
    }
}


console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
