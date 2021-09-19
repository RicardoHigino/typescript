// let e const
{
let seraQuePode = '?'
console.log(seraQuePode)

let estarFrio = true
if(estarFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.678-90'
console.log(cpf)
}

// Função anônima pois a função não tem nome, é a variável que recebe uma função
    const somar = function(n1: number, n2: number): number {
        return n1 + n2
    }
    console.log(somar(2, 2))
    // Função normal
    function somar1(n1: number, n2: number): number {
        return n1 + n2
    }
    console.log(somar1(2, 2))

    // Arrow function
    const subtrair = (n1: number, n2: number): number => n1 - n2
    console.log(subtrair(2, 3))

    // sem parâmetro
    const saudacao = () => console.log("Olá!")
    saudacao()

    const falarCom = (pessoa: string) => console.log('Ola' + pessoa)
    falarCom('João')

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
    function contagemRegressiva(inicio: number = 5, 
        fim: number = inicio - 5): void{
            console.log(inicio)
            while(inicio > fim) {
                inicio--
                console.log(inicio)
            }
            console.log("Fim!")
    }

    contagemRegressiva()
    contagemRegressiva(5)


// Rest & Spread
// Spread = Espalha os valores

const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] =
    ['Fernando', ...turmaA, 'Miguel', 'Ana']
console.log(turmaB)

// Rest = Agrupa os valores

function retornarArray(a: string, ...args: number[]): number[] {
    console.log(a)
    return args
}

const numeros = retornarArray('first', 1, 2, 3, 4, 5, 341, 1234)
console.log(numeros)
console.log(retornarArray('second', ...numbers))

// Rest e Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1 ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    // console.log(Array.isArray(params))
    console.log(`2 ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor, ano)
const [w, z] = [1, 2]

// Destructuring (array)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        nomeCara: 'Importado',
        nomeTeste: 'Teste'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

// Destructuring (object)
const { nome: n, preco: p, caracteristicas: { nomeCara, nomeTeste } } = item
console.log(n)
console.log(p)
console.log(nomeCara)
console.log(nomeTeste)

// Template String
const usuarioID: string = 'Ricardo'
const notificacao: string = '9'
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacao) > 9 ? '+9' : notificacao}
`

console.log(boasVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Mottor: ${caracteristicas[0]}`)
