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
Referencia um array e seu tipo
```
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
```
#### Podemos referenciar funções ou parâmetros
Ex:
```
function digaOi(): void {
    console.log('Oi')
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
```

#### Referenciando uma variável que vai receber uma função
Ex:
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
Depois é só instânciar o tipo.
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
