# Typescript
Typescript documentation 

# Transpile
"tsc example.ts" transpila o arquivo para js
"tsc -w" transpila para js em tempo real

# Tipos
Caso não especifique um tipo, TS seta um tipo automaticamente a uma variável de acordo com o valor dela.
Só aceita valores do tipo designado.

## Referenciando tipos:
### Tipo ": any" aceita qualquer tipo de valor ficando dinâmico
Ex: let minhaIdade || let minhaIdade: any = "15"

### Tipo ": number" aceita números
Ex: let idade: number = 27

### Tipo ": string" aceita strings
Ex: let nome: string = 'joão'

### Tipo ": boolean" aceita booleanos
Ex: let possuiHobbies: boolean = false

### Tipo ": any[]" referencia um array e seu tipo
Ex: let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]

### Tipo tupla - tupla é um array com valores predefinidos que deve seguir uma ordem ficando bem ordenado.
Ex: let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]

### Tipo enum - enums é uma estrutura que você define valores pré definidos
Ex: enum Cor {
    Cinza, //1
    Verde, //2
    Azul //3
}