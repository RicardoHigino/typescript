// string
let nome = 'joão' //ts atribui um tipo automaticamente de acordo com o valor, caso n tenha colocado nenhum tipo
console.log(nome)
//nome = 1 // erro valor diferente

// numbers
let idade: number = 27
// idade = "Ana" // erro valor diferente
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 // erro valor diferente
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade // dessa maneira é inicializada com tipo "any" ficando dinâmico
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'valor'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 'ola', 200, true]
//hobbies = 100

// tuplas - é um array com valores predefinidos que deve seguir uma ordem
let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]
console.log(endereco)

endereco = ["Rua Importante", 100, "Bloco C"]
console.log(endereco)

// enums - é uma estrutura que você define valores pré definidos
enum Cor {
    Cinza, // 0
    Verde = 100, // 100 pode setar um valor mas o próximo irá continuar este ex: 101
    Azul // 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
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