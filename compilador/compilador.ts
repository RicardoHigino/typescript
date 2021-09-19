// Flags do compilador
//"noEmitOnError" - Bloqueia a compilação do ts para js quando tem algum erro.
//"sourceMap" - Mapeia o arquivo js gerando um ts no source do browser.
//"noImplicitAny" - Bloqueia a variável implícita any.
//"strictNullChecks" - Análise para saber se pode ser gerado um nulo indesejado.
//"noUnusedParameters" - Avisa quando um parâmetro não está sendo usado.
//"noUnusedLocals" - Avisa quando uma variável local não está sendo usada.
//"outDir" - Pasta de saida do arquivo js compilado, basta inserir a pasta desejada para compilação.
//"outFile" - Configura um único arquivo de saída. Precisa mudar o module para system.

// "noEmitOnError"
let canal: string = 'Gaveta'
let inscritos: number = 21290

canal = 'teste'
console.log(inscritos)

// "noImplicitAny"

function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

// "strictNullChecks"
function saudar(isManha: boolean): void {
    if(isManha) {
        console.log('Bom dia!')
    } else {
        console.log('Boa noite!')
    }
}