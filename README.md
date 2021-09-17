# Typescript documentation 

# Transpile
* "tsc example.ts" transpila o arquivo ts para js.
* "tsc -w" transpila para js em tempo real.

# Types
* Caso não especifique um tipo, TS seta um tipo automaticamente a uma variável de acordo com o valor dela.
* Só aceita valores do tipo referenciado.

## Referenciando tipos:
### String, Number e Boolean
Tipos padrões.
```
let nome: string = 'joão'
let idade: number = 27
let possuiHobbies: boolean = false

```
### Any
Aceita qualquer tipo de valor se tornando dinâmico.
```
let minhaIdade 
|| 
let minhaIdade: any = "15"
```

### Any[]
Referencia um array e seu tipo.
```
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
```
#### Podemos referenciar funções ou parâmetros.
```
function digaOi(): void {
    console.log('Oi')
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
```

#### Referenciando uma variável que vai receber uma função.
```
let calculo: (X: number, Y: number) => number
calculo = multiplicar
console.log(calculo(5, 6))
```

### Void
É igual vazio, deixa explicito que esta função não retorna nada.
```
function digaOi(): void {
    console.log('Oi')
}
```

### Tupla
É um array com valores predefinidos que deve seguir uma ordem ficando bem ordenado.
```
let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]
```

### Enum
É uma estrutura que você define valores pré definidos.
```
enum Cor {
    Cinza, //1
    Verde, //2
    Azul //3
}

let minhaCor: Cor = Cor.Verde
```
### Objeto
Não precisa estar em ordem.
```
let usuario: { nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
```

### Alias
Tipos personalizados.
```
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}
```
Depois é só instanciar o tipo.
```
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
```

### Union Types
Múltiplos tipos.
```
let nota: number | string = 10 
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
```

### Never
Quando queremos explicitar que a função vai terminar em algum erro ou vai ficar em algum tipo de looping e nunca vai retornar a função. Para quando a função não termina corretamente.
```
function falha(msg: string): never {
    throw new Error(msg)
}
```

### Null
É mais útil para se ter um valor opcional
```
let alturaOpcional: null | number = 12
alturaOpcional = null
```
Exemplo de um criação de contato:
```
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
```
Quando instanciamos uma variável como tipo null não podemos alterar ela pois é nula. 
```
let podeSerNulo: null = null
podeSerNulo = 50 
console.log(podeSerNulo)
```
Se atribuirmos o null para a variável ela torna "any" podendo assim alterar seu valor posteriormente.
```
let podeSerNulo = null
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)
```