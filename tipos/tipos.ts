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

// --------------------- Union Types --------------------- 
// Múltiplos tipos
let nota: number | string = 10 
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

// Checando tipos - código feito quando não se usa o typescript por exemplo
let valor = 30

// esse código abaixo é um exemplo de verificações que o js precisa fazer sobre o type das variáveis
if (typeof valor == "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

// O typescript já faz toda essa verificação automaticamente 
let valor2: number
//valor2 = 'ricardo' // ele já faz a verificação dando erro no "valor2"

// --------------------- Never --------------------- 
// Quando queremos explicitar que a função vai terminar em algum erro ou vai ficar em algum tipo 
// de looping e nunca vai retornar a função. Para quando a função não termina corretamente.

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 80,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()

// --------------------- Null --------------------- 
// Flag do typescript
// É mais útil para ter um valor opcional

let altura = 12
// altura = null // para dar certo precisa ativar no tsconfig

// podemos usar o union types
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // fica como tipo "any" podendo assim alterar seu valor posteriormente
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// --------------------- Desafio - Transformar código JS em TS --------------------- 
/*
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
*/

// minha solução

// let contaBancaria:{
//     saldo: number, 
//     depositar: (valor: number) => void
// } = {
//     saldo: 3456,
//     depositar(valor: number): void {
//         this.saldo += valor
//     }
// }
 
// let correntista: {
//     nome: string,
//     contaBancaria: {
//         saldo: number,
//         depositar: (valor: number) => void
//     },
//     contatos: string[]
// } = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
 
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

// solução melhorada usando Alias
type ContaBancaria = {
    saldo: number, 
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}
 
type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)