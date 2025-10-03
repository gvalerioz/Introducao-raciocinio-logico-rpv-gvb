// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso dirigir:
// Maior de idade
// Possuir Habilitação
// Ser brasileiro


//------ CONTEXTO DE ATRIBUIÇÃO -----//

let idade = 18
let nacionalidade = 'brasileira'
let possuirCNH = true
let minhaValidacao = idade >= 18 && nacionalidade == 'brasileira' && possuirCNH == true

  console.log('Valor real d minha validação', minhaValidacao)
  console.log('Valor negado(!) d minha validação', !minhaValidacao)
//------ CONTEXTO DE VALIDAÇÃO -----//
// if (!(idade >= 18 && nacionalidade == 'brasileira' && possuirCNH == true)){
//     console.log ("Você pode dirigir ! ! !")
// }else{
//     console.log("Você nao pode dirigir ! ! !")
// }