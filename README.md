# Typescript documentation 

# Transpile
* "tsc example.ts" transpila o arquivo ts para js.
* "tsc -w" transpila para js em tempo real.

# Types
* Caso não especifique um tipo, TS seta um tipo automaticamente a uma variável de acordo com o valor dela.
* Só aceita valores do tipo referenciado.

## Referenciando tipos:
### Any - aceita qualquer tipo de valor ficando dinâmico
Ex: 
```
let minhaIdade || let minhaIdade: any = "15"
```

### Number - aceita números
Ex: 
```
let idade: number = 27
```

### String - aceita strings
Ex: 
```
let nome: string = 'joão'
```

### Boolean - aceita booleanos
Ex: 
```
let possuiHobbies: boolean = false
```

### Any[] - referencia um array e seu tipo
Ex: 
```
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
```

### Void - é igual vazio, deixa explicito que esta função não retorna nada
Ex: 
```
function digaOi(): void {
    console.log('Oi')
}
```

### Tupla - é um array com valores predefinidos que deve seguir uma ordem ficando bem ordenado.
Ex: 
```
let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]
```

### Enum - é uma estrutura que você define valores pré definidos
Ex: 
```
enum Cor {
    Cinza, //1
    Verde, //2
    Azul //3
}
```
### Objeto - não precisa estar em ordem
Ex:
```
let usuario: { nome: string, idade: number} = {
    nome: 'João',
    idade: 27
}
```

### Alias - tipos personalizados
Ex:
```
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}
```
Depois é só instância o tipo
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

### Podemos referenciar funções ou parâmetros
Ex:
```
function digaOi(): void {
    console.log('Oi')
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
```

### Referenciando uma variável que vai receber uma função
Ex:
```
let calculo: (X: number, Y: number) => number
calculo = multiplicar
console.log(calculo(5, 6))
```
